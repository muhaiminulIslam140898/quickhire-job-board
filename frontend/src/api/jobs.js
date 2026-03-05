import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all jobs
export const getJobs = () => API.get("/jobs");

// Get single job
export const getJob = (id) => API.get(`/jobs/${id}`);

// Apply to job
export const applyJob = (data) => API.post("/applications", data);

// Create job (admin)
export const createJob = (data) => API.post("/jobs", data);

// Delete job
export const deleteJob = (id) => API.delete(`/jobs/${id}`);