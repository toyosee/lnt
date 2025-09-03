import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa';
import useUser from '../../hooks/useUser';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('lntUser');
    localStorage.removeItem('lntToken');
    setUser(null);
    navigate('/login');
  };

  const getDashboardRoute = (role) => {
    switch (role) {
      case 'admin': return '/dashboards/admin';
      case 'tenant': return '/dashboards/tenant';
      case 'landlord': return '/dashboards/landlord';
      case 'agent': return '/dashboards/agent';
      case 'investor': return '/dashboards/investor';
      default: return '/';
    }
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Properties', to: '/list-property' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  const defaultPicture = 'https://randomuser.me/api/portraits/men/44.jpg'

  return (
    <header className={`bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200 ${isSticky ? 'shadow-lg bg-indigo-700' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition">
          <img src="/lnt.png" alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link key={label} to={to} className="text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105">
              {label}
            </Link>
          ))}

          <div className="border-2 border-gray-900 h-6 mx-2"></div>

          {user ? (
            <div className="relative ml-6">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                {user?.profile_picture ? (
                  <img
                    src={user.profile_picture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                  />
                ) : defaultPicture ? (
                  <img
                    src={defaultPicture}
                    alt="Default"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                  />
                ) : (
                  <FaUserCircle className="text-gray-700 text-3xl" />
                )}
              </button>



              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    <Link to="/view-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                    View Profile
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                    Update Profile
                  </Link>
                  <Link to={getDashboardRoute(user.role)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                    Dashboard
                  </Link>
                  <button onClick={() => { handleLogout(); setDropdownOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4 ml-6">
              <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105">
                <FontAwesomeIcon icon={faRightToBracket} />
                Login
              </Link>
              <Link to="/register" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition hover:scale-105">
                <FontAwesomeIcon icon={faUserPlus} />
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 text-2xl transition hover:scale-110" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-xl rounded-b-2xl px-6 pb-6 border-t border-gray-300 animate-slide-down">
          <nav className="flex flex-col gap-4 mt-4">
            {navLinks.map(({ label, to }) => (
              <Link key={label} to={to} className="text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}

            <div className="border-t border-gray-300 my-2"></div>

            {user ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105" onClick={() => setMenuOpen(false)}>
                  Update Profile
                </Link>
                <Link to={getDashboardRoute(user.role)} className="text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105 text-left">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition hover:scale-105" onClick={() => setMenuOpen(false)}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                  Login
                </Link>
                <Link to="/register" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition hover:scale-105" onClick={() => setMenuOpen(false)}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;