// src/components/BookingForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const BookingForm = ({ courtId, onSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ courtId, name, date });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained">Book</Button>
    </Box>
  );
};

export default BookingForm;
