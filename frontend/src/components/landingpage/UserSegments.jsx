import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faHome,
  faChartPie,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

const roles = [
  { label: "a Landlord", icon: faBuilding },
  { label: "a Tenant", icon: faHome },
  { label: "an Investor", icon: faChartPie },
  { label: "an Agent", icon: faUserTie }
];

const UserSegments = () => (
  <section className="bg-gradient-to-r from-purple-50 via-pink-100 to-indigo-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-3">
      <FontAwesomeIcon icon={faUserTie} className="text-indigo-500 text-4xl" />
      Who Are You?
    </h2>

    <div className="flex justify-center gap-6 flex-wrap">
      {roles.map(({ label, icon }) => (
        <button
          key={label}
          className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full shadow hover:bg-white hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FontAwesomeIcon icon={icon} className="text-xl" />
          <span className="text-lg font-medium">I'm {label}</span>
        </button>
      ))}
    </div>
  </section>
);

export default UserSegments;