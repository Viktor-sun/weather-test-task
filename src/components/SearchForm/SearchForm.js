import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import { InputBase, IconButton } from '@mui/material';
import {
  Search as SearchIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from '@mui/icons-material';
import weatherOperations from '../../redux/weather/weather-operations';
import weatherSelectors from '../../redux/weather/weather-selectors';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchForm() {
  const dispatch = useDispatch();
  const citys = useSelector(weatherSelectors.getCitys);

  const [city, setCity] = useState('');
  const handleChangeCity = e => setCity(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!city) return;

    if (hasCity()) {
      alert('stop');
      return;
    }

    dispatch(weatherOperations.fetchCitys(city.trim()));
    reset();
  };

  const hasCity = () =>
    citys.some(({ name }) => name.toLowerCase() === city.toLowerCase());

  const reset = () => setCity('');
  return (
    <Search>
      <form onSubmit={handleSubmit}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleChangeCity}
          value={city}
          placeholder="Add city..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          type="submit"
          color="inherit"
          aria-label="add to shopping cart"
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </form>
    </Search>
  );
}
