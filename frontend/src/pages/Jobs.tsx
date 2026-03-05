import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
}

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job._id} className="border rounded-lg p-6 shadow">

            <h2 className="text-xl font-semibold">{job.title}</h2>

            <p className="text-gray-600">{job.company}</p>

            <p className="text-gray-500">{job.location}</p>

            <p className="text-green-600 font-semibold">{job.salary}</p>

            <Link
              to={`/jobs/${job._id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-3 inline-block"
            >
              View Details
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;