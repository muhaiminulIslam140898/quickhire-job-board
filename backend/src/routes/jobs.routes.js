const express = require("express");
const router = express.Router();

const Job = require("../models/job.model");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create job (Admin)
router.post("/", async (req, res) => {
  try {

    const job = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      salary: req.body.salary,
      description: req.body.description
    });

    const savedJob = await job.save();

    res.status(201).json(savedJob);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE job
router.delete("/:id", async (req, res) => {
  try {

    await Job.findByIdAndDelete(req.params.id);

    res.json({ message: "Job deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;