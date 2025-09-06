import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import URLShortenerForm from './components/URLShortenerForm';
import URLShortenerList from './components/URLShortenerList';
import URLStatisticsPage from './components/URLStatisticsPage';
// import NotFoundPage from './components/NotFoundPage'; // A simple 404 page

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Med URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shorten URL
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<URLShortenerForm />} />
          <Route path="/stats" element={<URLShortenerList />} />
          <Route path="/stats/:shortcode" element={<URLStatisticsPage />} />
         
        </Routes>
      </Container>
    </Router>
  );
};

export default App;