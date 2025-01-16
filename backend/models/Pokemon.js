const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: [String],
  height: Number,
  weight: Number,
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    specialAttack: Number,
    specialDefense: Number,
  },
  image: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
