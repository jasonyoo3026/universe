const mongoose = require("mongoose");
const University = require("../models/University");
const SeedData= require('./postSeedData');

const db = require("../config/connection");

const universitySeed = [
  {
    name: "University of Sydney",
  },
  {
    name: "UNSW Sydney",
  },
  {
    name: "University of Melbourne",
  },
  {
    name: "Australian National University",
  },
  {
    name: "University of Queensland",
  },
  {
    name: "University of Western Australia",
  },
  {
    name: "University of Adelaide",
  },
  {
    name: "Monash University",
  },
  
];

async function seedDatabase() {
  await db.connect();
  await University.deleteMany({});
  await University.insertMany(universitySeed);

  console.log("Database seeded with universities!");
  process.exit(0);
}

seedDatabase();
