// src/pages/BookingPage.js
import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { Container } from '@mui/material';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (newBooking) => {
    setBookings([...bookings, { ...newBooking, id: bookings.length + 1 }]);
  };

  return (
    <Container>
      <BookingForm onSubmit={handleBooking} />
      <BookingList bookings={bookings} />
    </Container>
  );
};

export default BookingPage;

