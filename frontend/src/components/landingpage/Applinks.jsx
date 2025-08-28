import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons';

const AppLinks = () => (
  <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
      <FontAwesomeIcon icon={faApple} className="text-gray-700 text-4xl" />
      <span>Get the App</span>
    </h2>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="#"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow hover:shadow-xl transition duration-300"
      >
        <FontAwesomeIcon icon={faApple} className="text-2xl" />
        <span className="text-lg font-medium">Download on App Store</span>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 bg-green-700 text-white px-6 py-3 rounded-full shadow hover:shadow-xl transition duration-300"
      >
        <FontAwesomeIcon icon={faGooglePlay} className="text-2xl" />
        <span className="text-lg font-medium">Get it on Google Play</span>
      </a>
    </div>
  </section>
);

export default AppLinks;