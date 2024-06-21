import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaBars,
  FaTimes,
  FaFacebook,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-2 mt-2 py-3 " >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="hidden md:flex items-center gap-8 text-lg text-white">
          <Link
            to="/"
            //className="hover:text-blue-500 transform hover:scale-90 transition duration-300"
                 className="hover:text-blue-500 transform scale-90 transition duration-300 "
    >
          
            Home
          </Link>
          <Link
            to="/resume"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Resume
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Education
          </Link>
          <Link
            to="/technologies"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Technologies
          </Link>
          <Link
            to="/experience"
            className="hover:text-blue-500 transform scale-90 transition duration-300 "
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 transform scale-90 transition duration-300  "
          >
            Contact
          </Link>
          
        </div>
        <div className="hidden md:flex items-center justify-center gap-4 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/dilka-sithari/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-blue-300 transform hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://github.com/DilkaSithari"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transform hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/dilka_sithari/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-pink-300 transform hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://sitharihmd-19.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaMedium className="hover:text-blue-300 transform hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="hover:text-blue-500 transform hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
        </div>
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col items-center gap-4 py-4 text-lg text-white">
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/resume"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Resume
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Education
            </Link>
            <Link
              to="/technologies"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Technologies
            </Link>
            <Link
              to="/experience"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/blogs"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              Contact
            </Link>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
