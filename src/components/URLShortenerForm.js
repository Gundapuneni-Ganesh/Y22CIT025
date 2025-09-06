import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';

const URLShortenerForm = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [validity, setValidity] = useState('');
  const [customShortcode, setCustomShortcode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleShorten = async () => {
    // user side validation our we are doing 
    if (!originalURL || !originalURL.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)) {
      setError('Please enter a valid URL.');
      return;
    }

    if (validity && (isNaN(validity) || validity < 1)) {
      setError('Validity period must be a positive number of minutes.');
      return;
    }

    if (customShortcode && !customShortcode.match(/^[a-zA-Z0-9]+$/)) {
      setError('Custom shortcode can only contain alphanumeric characters.');
      return;
    }

    setError('');
    setSuccess('');

    // Assume an API call to a backend here.{ the api calls }
    // The instructions mention the frontend handles this, but a real app needs a backend.
    const newShortenedURL = {
      id: Math.random().toString(36).substring(7), // Dummy ID
      original: originalURL,
      shortened: customShortcode || 'random-shortcode', // Placeholder
      creationDate: new Date().toISOString(),
      expiryDate: validity ? new Date(new Date().getTime() + validity * 60000).toISOString() : 'Never',
    };

    // This would ideally be a state management update or an API call.
    // For this example, we'll just show a success message.
    setSuccess(`URL shortened successfully! Short URL: ${newShortenedURL.shortened}`);
    setOriginalURL('');
    setValidity('');
    setCustomShortcode('');
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shorten a URL
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <TextField
        fullWidth
        label="Original URL"
        variant="outlined"
        value={originalURL}
        onChange={(e) => setOriginalURL(e.target.value)}
        sx={{ mb: 2 }}
        required
      />
      <TextField
        fullWidth
        label="Validity Period (in minutes, optional)"
        variant="outlined"
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Custom Shortcode (optional)"
        variant="outlined"
        value={customShortcode}
        onChange={(e) => setCustomShortcode(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleShorten}
        fullWidth
      >
        Shorten URL
      </Button>
    </Box>
  );
};

export default URLShortenerForm;