import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Properties', to: '/list-property' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:scale-105 hover:drop-shadow-md transition duration-300"
        >
          <img src="/lnt.png" alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {/* LnT Homes */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center gap-4 ml-6">
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-xl rounded-b-2xl px-6 pb-6 border-t border-gray-300 animate-slide-down">
          <nav className="flex flex-col gap-4 mt-4">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;