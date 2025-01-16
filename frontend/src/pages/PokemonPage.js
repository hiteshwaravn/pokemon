import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Paper,
  Divider,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import axios from '../api';

const PokemonPage = () => {
  const { id } = useParams(); // Get Pokémon ID from the URL
  const navigate = useNavigate(); // Initialize the navigate hook
  const [pokemon, setPokemon] = useState(null);
  const [similarPokemon, setSimilarPokemon] = useState([]);
  const theme = useTheme(); // Access current theme

  // Fetch Pokémon details and similar Pokémon
  const fetchPokemonDetails = async () => {
    try {
      const { data } = await axios.get(`/pokemon/${id}`);
      setPokemon(data.pokemon);
      setSimilarPokemon(data.similar);
    } catch (error) {
      console.error("Failed to fetch Pokémon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) return <Typography>Loading...</Typography>;

  return (
    <Box
      sx={{
        padding: 4,
        background: theme.palette.background.default,
        minHeight: '100vh',
        color: theme.palette.text.primary,
      }}
    >
      {/* Main Pokémon Details Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* Left Section: Pokémon Image */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            flex: 1,
            textAlign: 'center',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #f5f5f5, #e3f2fd)',
          }}
        >
          <CardMedia
            component="img"
            image={pokemon.image}
            alt={pokemon.name}
            sx={{
              maxHeight: 400,
              objectFit: 'contain',
              margin: 'auto',
              borderRadius: '16px',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              color: theme.palette.primary.main,
              fontWeight: 'bold',
            }}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
        </Paper>

        {/* Right Section: Pokémon Details */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            flex: 1,
            borderRadius: '16px',
            background: theme.palette.background.paper,
          }}
        >
          {/* Key Attributes */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Key Attributes
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="body1">
            <strong>ID:</strong> #{pokemon.id}
          </Typography>
          <Typography variant="body1">
            <strong>Height:</strong> {pokemon.height}
          </Typography>
          <Typography variant="body1">
            <strong>Weight:</strong> {pokemon.weight}
          </Typography>

          {/* Types */}
          <Typography
            variant="h6"
            sx={{ marginTop: 2, fontWeight: 'bold', color: theme.palette.primary.main }}
          >
            Type
          </Typography>
          <Box sx={{ marginTop: 1 }}>
            {pokemon.type.map((t) => (
              <Chip
                key={t}
                label={t}
                sx={{
                  margin: '4px',
                  background: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                }}
              />
            ))}
          </Box>

          {/* Stats */}
          <Typography
            variant="h6"
            sx={{ marginTop: 3, fontWeight: 'bold', color: theme.palette.secondary.main }}
          >
            Stats
          </Typography>
          <Box sx={{ marginTop: 1 }}>
            <Typography variant="body2">HP: {pokemon.stats.hp}</Typography>
            <Typography variant="body2">Attack: {pokemon.stats.attack}</Typography>
            <Typography variant="body2">Defense: {pokemon.stats.defense}</Typography>
            <Typography variant="body2">
              Special Attack: {pokemon.stats.specialAttack}
            </Typography>
            <Typography variant="body2">
              Special Defense: {pokemon.stats.specialDefense}
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Similar Pokémon Section */}
      <Typography
        variant="h4"
        sx={{
          marginTop: 4,
          marginBottom: 2,
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Similar Pokémon
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          padding: 2,
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        {similarPokemon.map((poke) => (
          <Card
            key={poke.id}
            sx={{
              minWidth: 200,
              boxShadow: 4,
              borderRadius: 2,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)', cursor: 'pointer' }, // Add cursor pointer
              background: theme.palette.background.paper,
              flex: '0 0 auto', // Ensure cards are horizontal
            }}
            onClick={() => navigate(`/pokemon/${poke.id}`)} // Navigate to the Pokémon's details page
          >
            <CardMedia
              component="img"
              height="150"
              image={poke.image}
              alt={poke.name}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', color: theme.palette.primary.main }}
              >
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                {poke.type.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    sx={{
                      margin: '4px',
                      background: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 'bold',
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PokemonPage;
