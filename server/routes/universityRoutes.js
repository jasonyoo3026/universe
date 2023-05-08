const express = require("express");
const router = express.Router();
const University = require("../models/University");

router.get("/", async (req, res) => {
  try {
    const universities = await University.find();
    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
