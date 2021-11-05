import React from 'react';
import Typography from '@mui/material/Typography';
import CardsContainer from '../../components/CardsContainer';

export default function WeaterPage() {
  return (
    <>
      <Typography align="center" component="h1" variant="h3">
        Weather for you whith Open Weather!
      </Typography>
      <CardsContainer />
    </>
  );
}
