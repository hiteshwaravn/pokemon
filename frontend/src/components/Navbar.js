import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokémon App
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} color="secondary" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
