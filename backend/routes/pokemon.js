const express = require('express');
const Pokemon = require('../models/Pokemon');
const router = express.Router();

// Get Pokémon list with search, filter, sort, and pagination
router.get('/', async (req, res) => {
    const { search, type, sort, page = 1, limit = 10 } = req.query;
  
    const query = {};
    if (search) query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    if (type) query.type = { $in: type.split(',') }; // Filter by types
  
    const sortOptions = {};
    if (sort) {
      const [key, order] = sort.split(':'); // E.g., "name:asc"
      sortOptions[key] = order === 'asc' ? 1 : -1;
    }
  
    try {
      const pokemon = await Pokemon.find(query)
        .sort(sortOptions)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
      const count = await Pokemon.countDocuments(query);
  
      res.json({ pokemon, total: count, page, limit });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Pokémon data." });
    }
  });
  
// Get Pokémon details
router.get('/:id', async (req, res) => {
    try {
      const pokemon = await Pokemon.findOne({ id: req.params.id });
      if (!pokemon) return res.status(404).json({ message: "Pokémon not found" });
  
      // Find similar Pokémon based on type
      const similar = await Pokemon.find({
        type: { $in: pokemon.type },
        id: { $ne: pokemon.id },
      });
  
      res.json({ pokemon, similar });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Pokémon details." });
    }
  });
  

module.exports = router;
