import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faUsers,
  faLightbulb,
  faHome,
  faUserTie,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const highlights = [
  {
    title: "Our Mission",
    icon: faBullseye,
    description:
      "To simplify and elevate property management and real estate investment through a smart, transparent platform that connects landlords, tenants, and investors—anywhere, anytime.",
  },
  {
    title: "Our Vision",
    icon: faEye,
    description:
      "To become the go-to digital ecosystem for real estate management and investment across Africa, empowering landlords, tenants, and investors to connect, transact, and grow wealth seamlessly from anywhere in the world.",
  },
  {
    title: "Our Community",
    icon: faUsers,
    description:
      "We serve landlords, tenants, investors, and agents across Nigeria with local insight and care.",
  },
  {
    title: "Smart Innovation",
    icon: faLightbulb,
    description:
      "We use modern tools to deliver accurate listings, seamless experiences, and personalized support.",
  },
  {
    title: "Your Next Home",
    icon: faHome,
    description:
      "Whether you're renting, buying, or listing, LnT Partners is your trusted partner in the journey.",
  },
];

const teamMembers = [
  {
    name: "Musa Sule",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    linkedin: "https://linkedin.com/in/musasule",
    facebook: "https://facebook.com/musasule",
  },
  {
    name: "Elijah Abolaji",
    role: "CTO & Co-Founder",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    linkedin: "https://linkedin.com/in/elijahabolaji",
    facebook: "https://facebook.com/elijahabolaji",
  },
  {
    name: "Tunde Balogun",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    linkedin: "https://linkedin.com/in/tundebalogun",
    facebook: "https://facebook.com/tundebalogun",
  },
];

const AboutUs = () => (
  <>
    {/* About Section */}
    <section className="bg-gradient-to-r from-purple-50 via-pink-100 to-indigo-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-3">
        <FontAwesomeIcon icon={faBullseye} className="text-indigo-500 text-4xl" />
        About LnTHousing
      </h2>

      <div className="mb-12 flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg"
          alt="About LnTHousing"
          className="rounded-xl shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

      <div className="flex justify-center gap-6 flex-wrap mb-12">
        {highlights.map(({ title, icon, description }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-4 bg-gray-900 text-white px-6 py-8 rounded-xl shadow hover:bg-white hover:text-gray-900 transition duration-300 w-72"
          >
            <FontAwesomeIcon icon={icon} className="text-3xl text-indigo-400" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-center">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 mb-16">
        <Link
          to="/list-property"
          className="inline-block bg-gray-900 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Explore Listings
        </Link>
      </div>
    </section>

    {/* Meet Our Team Section */}
    <section className="bg-gradient-to-r from-indigo-50 via-blue-100 to-purple-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-3">
        <FontAwesomeIcon icon={faUserTie} className="text-blue-500 text-4xl" />
        Meet Our Team
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {teamMembers.map(({ name, role, image, linkedin, facebook }) => (
          <div
            key={name}
            className="bg-white text-gray-900 rounded-xl shadow-lg p-6 w-72 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600 mb-3">{role}</p>
            <div className="flex gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-800 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-800 transition"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutUs;