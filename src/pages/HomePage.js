// src/pages/HomePage.js
import React from 'react';
import CourtCard from '../components/CourtCard';
import { Container, Grid } from '@mui/material';

const courts = [
  { id: 1, name: 'Tennis Court', description: 'Outdoor tennis court' },
  { id: 2, name: 'Basketball Court', description: 'Outdoor basketball court' },
];

const HomePage = ({ onBook }) => (
  <Container>
    <Grid container spacing={2}>
      {courts.map((court) => (
        <Grid item xs={12} sm={6} key={court.id}>
          <CourtCard court={court} onBook={onBook} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HomePage;
