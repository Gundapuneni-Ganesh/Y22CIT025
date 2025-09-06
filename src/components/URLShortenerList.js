import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const URLShortenerList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // In a real application, this would be an API call to fetch the data.
    // Here, we use dummy data to represent a list of shortened URLs.
    const dummyData = [
      {
        id: 'abcde',
        original: 'https://www.google.com',
        shortened: 'http://localhost:3000/abcde',
        creationDate: '2025-09-01T10:00:00Z',
        expiryDate: '2025-09-02T10:00:00Z',
      },
      {
        id: 'fghij',
        original: 'https://www.github.com',
        shortened: 'http://localhost:3000/fghij',
        creationDate: '2025-09-05T12:30:00Z',
        expiryDate: 'Never',
      },
    ];
    setUrls(dummyData);
  }, []);

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener Statistics
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {urls.length > 0 ? (
            urls.map((url) => (
              <ListItem key={url.id} divider>
                <ListItemText
                  primary={`Original: ${url.original}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        Shortened: <a href={url.shortened}>{url.shortened}</a>
                      </Typography>
                      <br />
                      <Typography component="span" variant="body2" color="text.secondary">
                        Created: {new Date(url.creationDate).toLocaleString()}
                      </Typography>
                      <br />
                      <Typography component="span" variant="body2" color="text.secondary">
                        Expires: {url.expiryDate === 'Never' ? 'Never' : new Date(url.expiryDate).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" align="center">No shortened URLs available.</Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default URLShortenerList;