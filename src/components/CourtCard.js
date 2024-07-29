// src/components/CourtCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CourtCard = ({ court, onBook }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{court.name}</Typography>
      <Typography variant="body2">{court.description}</Typography>
      <Button variant="contained" color="primary" onClick={() => onBook(court.id)}>
        Book Now
      </Button>
    </CardContent>
  </Card>
);

export default CourtCard;
