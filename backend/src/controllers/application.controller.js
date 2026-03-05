const Application = require("../models/application.model");

// Create application
exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get applications by job
exports.getApplicationsByJob = async (req, res) => {
  try {
    const apps = await Application.find({
      job_id: req.params.jobId,
    });

    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};