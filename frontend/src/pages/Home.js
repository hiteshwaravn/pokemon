import React, { useState, useEffect } from 'react';
import axios from '../api';
import {
  Grid,
  TextField,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material';
import PokemonCard from '../components/PokemonCard';
import CustomPagination from '../components/Pagination';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState([]); // Filtering by type
  const [sortOption, setSortOption] = useState('name:asc'); // Sorting option
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPokemon = async () => {
    const { data } = await axios.get(`/pokemon`, {
      params: {
        search,
        type: filterType.join(','), // Send selected types as a comma-separated string
        sort: sortOption,
        page,
      },
    });
    setPokemonList(data.pokemon);
    setTotalPages(Math.ceil(data.total / data.limit));
  };

  useEffect(() => {
    fetchPokemon();
  }, [search, filterType, sortOption, page]);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value); // Update selected types
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value); // Update selected sort option
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Pokémon List
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search Pokémon"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter by Type */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Type</InputLabel>
          <Select
            multiple
            value={filterType}
            onChange={handleFilterChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {['fire', 'water', 'grass', 'electric', 'ice', 'bug', 'rock'].map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sort By */}
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortOption} onChange={handleSortChange}>
            <MenuItem value="name:asc">Name (A-Z)</MenuItem>
            <MenuItem value="name:desc">Name (Z-A)</MenuItem>
            <MenuItem value="id:asc">ID (Low-High)</MenuItem>
            <MenuItem value="id:desc">ID (High-Low)</MenuItem>
            <MenuItem value="type:asc">Type (A-Z)</MenuItem>
            <MenuItem value="type:desc">Type (Z-A)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Pokémon Cards */}
      <Grid container spacing={2}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <PokemonCard {...pokemon} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <CustomPagination page={page} count={totalPages} onChange={setPage} />
    </Box>
  );
};

export default Home;
