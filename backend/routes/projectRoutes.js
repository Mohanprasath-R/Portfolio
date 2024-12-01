const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Route to fetch all projects
router.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
