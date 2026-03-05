import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  if (!job) return <p className="p-10">Loading...</p>;

  return (
    <div className="container mx-auto p-8">

      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>

      <p className="text-gray-600 mb-2">{job.company}</p>

      <p className="text-gray-500 mb-2">{job.location}</p>

      <p className="text-green-600 font-semibold mb-4">{job.salary}</p>

      <p className="mb-6">{job.description}</p>

      <a
        href={`#apply`}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Apply Now
      </a>

      <Link to={`/apply/${job._id}`}>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply Now
        </button>
      </Link>

    </div>
  );
}

export default JobDetails;