import JobCard from "./JobCard";

const jobs = [
  {
    company: "Google",
    title: "Senior UI Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
  },
  {
    company: "Airbnb",
    title: "Product Designer",
    location: "New York",
    type: "Full-time",
    salary: "$110k - $140k",
  },
  {
    company: "Tesla",
    title: "Frontend Developer",
    location: "California",
    type: "Full-time",
    salary: "$130k - $160k",
  },
  {
    company: "Spotify",
    title: "Backend Engineer",
    location: "Sweden",
    type: "Full-time",
    salary: "$125k - $155k",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured Jobs
          </h2>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            View all
          </button>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;