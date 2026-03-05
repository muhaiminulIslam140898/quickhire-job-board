const express = require("express");
const cors = require("cors");

const jobRoutes = require("./routes/jobs.routes");
const applicationRoutes = require("./routes/applications.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

module.exports = app;