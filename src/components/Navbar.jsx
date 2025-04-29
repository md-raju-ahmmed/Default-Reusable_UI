import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-500 py-3 shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h3 className="text-white text-xl font-bold">D-Link</h3>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-white font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "hover:text-gray-200 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "hover:text-gray-200 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "hover:text-gray-200 transition"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "hover:text-gray-200 transition"
              }
            >
              Services
            </NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="bg-white px-4 py-2 rounded-lg flex gap-2">
            <button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
              <Link to="/login"> Login</Link>
            </button>
            or
            <button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
