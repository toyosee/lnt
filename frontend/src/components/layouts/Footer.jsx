import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-6 text-center">
    {/* Navigation Links */}
    <div className="mb-4 flex justify-center flex-wrap gap-4">
      <Link to="/faqs" className="text-sm hover:underline text-gray-300">
        FAQs
      </Link>
      <Link to="/privacy-policy" className="text-sm hover:underline text-gray-300">
        Privacy Policy
      </Link>
      <Link to="/contact" className="text-sm hover:underline text-gray-300">
        Contact
      </Link>
    </div>

    {/* Social Icons */}
    <div className="mb-4 flex justify-center gap-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition"
      >
        <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
      </a>
      <a
        href="https://wa.me/2340000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
      </a>
    </div>

    {/* Copyright */}
    <div className="text-sm text-gray-400">
      © {new Date().getFullYear()} LnT Partners. All rights reserved.
    </div>
  </footer>
);

export default Footer;