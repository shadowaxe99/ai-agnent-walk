```javascript
import { google } from 'googleapis';

const analytics = google.analyticsreporting('v4');

const viewId = 'YOUR_VIEW_ID'; // Replace with your view ID.

// Authenticate with Google Analytics.
const jwt = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/analytics.readonly'],
);

async function trackQuizPerformance() {
  const response = await analytics.reports.batchGet({
    auth: jwt,
    requestBody: {
      reportRequests: [
        {
          viewId,
          dateRanges: [
            {
              startDate: '7daysAgo',
              endDate: 'today',
            },
          ],
          metrics: [
            {
              expression: 'ga:totalEvents',
            },
          ],
          dimensions: [
            {
              name: 'ga:eventCategory',
            },
            {
              name: 'ga:eventAction',
            },
            {
              name: 'ga:eventLabel',
            },
          ],
          filtersExpression: 'ga:eventCategory==Quiz',
        },
      ],
    },
  });

  const reports = response.data.reports[0];
  const rows = reports.data.rows;

  let quizPerformanceMetrics = {};

  rows.forEach(row => {
    const eventCategory = row.dimensions[0];
    const eventAction = row.dimensions[1];
    const eventLabel = row.dimensions[2];
    const totalEvents = row.metrics[0].values[0];

    if (!quizPerformanceMetrics[eventCategory]) {
      quizPerformanceMetrics[eventCategory] = {};
    }

    if (!quizPerformanceMetrics[eventCategory][eventAction]) {
      quizPerformanceMetrics[eventCategory][eventAction] = {};
    }

    quizPerformanceMetrics[eventCategory][eventAction][eventLabel] = totalEvents;
  });

  return quizPerformanceMetrics;
}

export default trackQuizPerformance;
```