const { Schema, model } = require("mongoose");

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const University = model("University", universitySchema);

module.exports = University;
