import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700 transition"
        >
          SupplyChainAI
        </Link>

        <nav className="flex items-center space-x-6">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-medium transition ${
                pathname === path
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              {name}
            </Link>
          ))}

          <Link to="/signup">
            <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
