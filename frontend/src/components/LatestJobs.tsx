const jobs = [
  {
    company: "Netflix",
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$140k - $170k",
  },
  {
    company: "Amazon",
    title: "Cloud Engineer",
    location: "Seattle",
    type: "Full-time",
    salary: "$130k - $160k",
  },
  {
    company: "Dribbble",
    title: "UI/UX Designer",
    location: "San Francisco",
    type: "Contract",
    salary: "$90k - $120k",
  },
];

const LatestJobs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Latest Jobs Open
          </h2>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            View all
          </button>
        </div>

        {/* Job List */}
        <div className="mt-10 space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              {/* Left Side */}
              <div>
                <p className="text-sm text-gray-500">
                  {job.company}
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  {job.title}
                </h3>

                <div className="flex gap-4 text-sm text-gray-500 mt-3">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Right Side */}
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;