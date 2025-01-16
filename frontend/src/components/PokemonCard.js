import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ id, name, image, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`); // Navigate to Pokémon details page
  };

  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, margin: 2, cursor: 'pointer' }}
      onClick={handleClick}
    >
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)} (#{id})
        </Typography>
        <Box>
          {type.map((t) => (
            <Chip key={t} label={t} color="secondary" sx={{ margin: '2px' }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
