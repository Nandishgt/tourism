import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App = () => {
  const handleBook = (courtId) => {
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Sport Court Booking</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage onBook={handleBook} />} />
          <Route path="/bookings" element={<BookingPage />} />
        </Routes>
      </Container>
    </Router>


  );
};






export default App;
