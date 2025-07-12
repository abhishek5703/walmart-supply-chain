import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully"); 
    navigate("/login");
  };

  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const privateLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="NexChain Logo" className="h-12 object-contain" />
        </Link>

        {/* Nav Links + Auth */}
        <div className="flex items-center space-x-4">
          {(isLoggedIn ? privateLinks : publicLinks).map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-semibold px-5 py-2 rounded-full shadow-sm transition transform hover:scale-105 duration-150 ${
                pathname === path
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
            >
              {name}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium px-5 py-2 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm font-medium px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-sm hover:scale-105 cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
