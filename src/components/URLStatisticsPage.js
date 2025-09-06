import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const URLStatisticsPage = () => {
  const { shortcode } = useParams(); // Get the shortcode from the URL
  // In a real app, you would fetch data for this specific shortcode from an API.

  // Dummy data for demonstration
  const stats = {
    shortenedURL: `http://localhost:3000/${shortcode}`,
    creationDate: '2025-09-05T12:30:00Z',
    expiryDate: 'Never',
    totalClicks: 15,
    clickData: [
      { timestamp: '2025-09-05T13:00:00Z', source: 'Direct', location: 'New York, USA' },
      { timestamp: '2025-09-05T14:15:00Z', source: 'Facebook', location: 'London, UK' },
      { timestamp: '2025-09-05T16:40:00Z', source: 'Twitter', location: 'Tokyo, Japan' },
    ],
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Statistics for "{shortcode}"
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">Summary</Typography>
        <Typography><strong>Shortened URL:</strong> {stats.shortenedURL}</Typography>
        <Typography><strong>Creation Date:</strong> {new Date(stats.creationDate).toLocaleString()}</Typography>
        <Typography><strong>Expiry Date:</strong> {stats.expiryDate === 'Never' ? 'Never' : new Date(stats.expiryDate).toLocaleString()}</Typography>
        <Typography><strong>Total Clicks:</strong> {stats.totalClicks}</Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Detailed Clicks</Typography>
        <List>
          {stats.clickData.map((click, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`Timestamp: ${new Date(click.timestamp).toLocaleString()}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      Source: {click.source}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.secondary">
                      Location: {click.location}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default URLStatisticsPage;