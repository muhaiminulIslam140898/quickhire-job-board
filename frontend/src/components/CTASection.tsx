const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Start posting jobs today
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Connect with thousands of talented candidates and grow your team faster.
        </p>

        <button className="mt-10 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Post a Job
        </button>

      </div>
    </section>
  );
};

export default CTASection;