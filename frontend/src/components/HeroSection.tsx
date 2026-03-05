import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Find Your Dream Job
          <span className="text-blue-600"> Today</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto"
        >
          Discover thousands of job opportunities from top companies
          worldwide and grow your career with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Get Started
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-300">
            Browse Jobs
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;