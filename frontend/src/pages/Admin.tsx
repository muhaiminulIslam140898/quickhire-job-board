import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
}

function Admin() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const API = "http://localhost:5000/api/jobs";

  const fetchJobs = async () => {
    const res = await axios.get(API);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const createJob = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post(API, {
      title,
      company,
      location,
      salary,
    });

    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");

    fetchJobs();
  };

  const deleteJob = async (id: string) => {
    await axios.delete(`${API}/${id}`);
    fetchJobs();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* Add Job Form */}

      <div className="border p-6 rounded-lg shadow mb-10 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Add New Job</h2>

        <form
          onSubmit={createJob}
          className="grid grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Add Job
          </button>
        </form>
      </div>

      {/* Job List */}

      <h2 className="text-xl font-semibold mb-4">All Jobs</h2>

      <div className="grid gap-4">

        {jobs.map((job) => (
          <div
            key={job._id}
            className="border p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p>{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-green-600">{job.salary}</p>
            </div>

            <div className="flex gap-2">

              <Link to={`/applications/${job._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Applications
                </button>
              </Link>

              <button
                onClick={() => deleteJob(job._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Admin;