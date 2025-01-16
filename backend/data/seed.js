const axios = require('axios');
const Pokemon = require('../models/Pokemon');
const connectDB = require('../config/db');
require('dotenv').config();

const seedDatabase = async () => {
  connectDB();

  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        console.log(details.data);
        const p = details.data;

        return {
          id: p.id,
          name: p.name,
          type: p.types.map((t) => t.type.name),
          height: p.height,
          weight: p.weight,
          stats: {
            hp: p.stats[0].base_stat,
            attack: p.stats[1].base_stat,
            defense: p.stats[2].base_stat,
            specialAttack: p.stats[3].base_stat,
            specialDefense: p.stats[4].base_stat,
          },
          image: p.sprites.front_default,
        };
      })
    );

    await Pokemon.insertMany(pokemonData);
    console.log("Database Seeded!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
