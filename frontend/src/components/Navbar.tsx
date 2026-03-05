import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          QuickHire
        </Link>

        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-600">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;