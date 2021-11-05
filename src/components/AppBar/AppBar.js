import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchForm from '../SearchForm';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <WbSunnyIcon />
          </Typography>
          <SearchForm />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
