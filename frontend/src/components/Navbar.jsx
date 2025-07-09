import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">
          SupplyChainAI
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-medium transition px-3 py-2 rounded-lg ${
                pathname === path
                  ? "text-white bg-green-500"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-100"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
