import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '80vh', 
        textAlign: 'center' 
      }}
    >
      <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;