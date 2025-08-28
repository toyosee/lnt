import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCheckCircle,
  faTools,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const PlatformHighlights = () => (
  <section className="bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 py-16 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
      <FontAwesomeIcon icon={faRocket} className="text-purple-500 text-4xl" />
      Platform Highlights
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition duration-300">
        <FontAwesomeIcon icon={faChartLine} className="text-indigo-500 text-5xl mb-4" />
        <h3 className="font-bold text-xl mb-2 text-gray-700">Investment Tracker</h3>
        <p className="text-gray-600">Monitor ROI, rental income, and market trends.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition duration-300">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-5xl mb-4" />
        <h3 className="font-bold text-xl mb-2 text-gray-700">Verified Listings</h3>
        <p className="text-gray-600">All properties are vetted for accuracy and safety.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition duration-300">
        <FontAwesomeIcon icon={faTools} className="text-yellow-500 text-5xl mb-4" />
        <h3 className="font-bold text-xl mb-2 text-gray-700">Smart Management Tools</h3>
        <p className="text-gray-600">Automate rent collection, maintenance, and communication.</p>
      </div>
    </div>
  </section>
);

export default PlatformHighlights;