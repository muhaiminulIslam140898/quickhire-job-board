import {
  Briefcase,
  DollarSign,
  BarChart,
  Code,
  PenTool,
  Settings,
} from "lucide-react";

const categories = [
  { name: "Design", jobs: "235 Jobs", icon: <PenTool size={28} /> },
  { name: "Sales", jobs: "756 Jobs", icon: <DollarSign size={28} /> },
  { name: "Marketing", jobs: "140 Jobs", icon: <BarChart size={28} /> },
  { name: "Finance", jobs: "325 Jobs", icon: <Briefcase size={28} /> },
  { name: "Technology", jobs: "436 Jobs", icon: <Code size={28} /> },
  { name: "Engineering", jobs: "542 Jobs", icon: <Settings size={28} /> },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Explore by Category
        </h2>

        <p className="text-gray-500 mt-4">
          Find your dream job by browsing popular categories
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {category.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {category.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {category.jobs}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;