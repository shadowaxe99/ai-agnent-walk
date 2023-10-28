```javascript
import { google } from 'googleapis';

const analytics = google.analyticsreporting('v4');

const VIEW_ID = 'YOUR_VIEW_ID'; // Replace with your view ID.

// Authenticate with Google.
const jwt = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/analytics.readonly'],
  null
);

export const trackUserEngagement = async () => {
  const response = await analytics.reports.batchGet({
    auth: jwt,
    requestBody: {
      reportRequests: [
        {
          viewId: VIEW_ID,
          dateRanges: [
            {
              startDate: '7daysAgo',
              endDate: 'today',
            },
          ],
          metrics: [
            {
              expression: 'ga:users',
            },
            {
              expression: 'ga:sessions',
            },
            {
              expression: 'ga:sessionDuration',
            },
            {
              expression: 'ga:pageviews',
            },
            {
              expression: 'ga:bounceRate',
            },
          ],
          dimensions: [
            {
              name: 'ga:date',
            },
          ],
        },
      ],
    },
  });

  const reports = response.data.reports[0];
  const rows = reports.data.rows;

  return rows.map(row => ({
    date: row.dimensions[0],
    users: row.metrics[0].values[0],
    sessions: row.metrics[0].values[1],
    sessionDuration: row.metrics[0].values[2],
    pageviews: row.metrics[0].values[3],
    bounceRate: row.metrics[0].values[4],
  }));
};
```