const express = require("express");
const router = express.Router();

const Application = require("../models/application.model");


// POST apply to job
router.post("/", async (req, res) => {
  try {

    const application = new Application({
      job_id: req.body.job_id,
      name: req.body.name,
      email: req.body.email,
      resume_link: req.body.resume_link,
      cover_note: req.body.cover_note
    });

    const savedApplication = await application.save();

    res.status(201).json(savedApplication);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;