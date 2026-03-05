const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    job_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: String,
    email: String,
    cover_note: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);