// src/components/BookingList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const BookingList = ({ bookings }) => (
  <List>
    {bookings.map((booking) => (
      <ListItem key={booking.id}>
        <ListItemText primary={`${booking.name} - ${booking.date}`} secondary={`Court ID: ${booking.courtId}`} />
      </ListItem>
    ))}
  </List>
);

export default BookingList;
