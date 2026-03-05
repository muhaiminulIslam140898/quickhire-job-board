import { MapPin, Clock } from "lucide-react";

type JobCardProps = {
  company: string;
  title: string;
  location: string;
  type: string;
  salary: string;
};

const JobCard = ({
  company,
  title,
  location,
  type,
  salary,
}: JobCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">

      <p className="text-sm text-gray-500">{company}</p>

      <h3 className="text-lg font-semibold mt-2">
        {title}
      </h3>

      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{type}</span>
        </div>
      </div>

      <p className="mt-4 font-semibold text-blue-600">
        {salary}
      </p>

    </div>
  );
};

export default JobCard;