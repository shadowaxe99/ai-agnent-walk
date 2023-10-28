```javascript
import { google } from 'googleapis';

const analytics = google.analyticsreporting('v4');

const viewId = 'YOUR_VIEW_ID'; // Replace with your view ID.

// Authenticate with Google.
const jwt = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/analytics.readonly'],
  null
);

export const trackLiveDemoInteraction = async (interactionType, interactionData) => {
  try {
    await jwt.authorize();

    const response = await analytics.reports.batchGet({
      auth: jwt,
      requestBody: {
        reportRequests: [
          {
            viewId: viewId,
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
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    dimensionName: 'ga:eventCategory',
                    operator: 'EXACT',
                    expressions: [interactionType],
                  },
                  {
                    dimensionName: 'ga:eventAction',
                    operator: 'EXACT',
                    expressions: [interactionData],
                  },
                ],
              },
            ],
          },
        ],
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error tracking live demo interaction:', error);
  }
};
```