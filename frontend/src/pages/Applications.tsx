import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Application {
  _id: string;
  name: string;
  email: string;
  resume: string;
}

function Applications() {
  const { jobId } = useParams();

  const [applications, setApplications] = useState<Application[]>([]);

  const fetchApplications = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/applications/${jobId}`
    );

    setApplications(res.data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Job Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-gray-500">No applications yet.</p>
      ) : (
        <div className="grid gap-4">

          {applications.map((app) => (
            <div
              key={app._id}
              className="border p-4 rounded-lg shadow bg-white"
            >
              <h3 className="text-lg font-semibold">
                {app.name}
              </h3>

              <p className="text-gray-600">
                {app.email}
              </p>

              <a
                href={app.resume}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Resume
              </a>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Applications;