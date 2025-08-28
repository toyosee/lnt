import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';



const testimonials = [
  {
    quote: "This platform helped me rent out my apartment in days!",
    name: "Amina",
    role: "Landlord",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote: "I found my dream home and tracked my investment returns easily.",
    name: "Tunde",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    quote: "The search filters are intuitive and saved me so much time.",
    name: "Chioma",
    role: "Tenant",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "Listing properties is seamless, and the support team is fantastic.",
    name: "Emeka",
    role: "Agent",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "I love how easy it is to manage multiple listings.",
    name: "Fatima",
    role: "Landlord",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "The platform feels professional and trustworthy.",
    name: "Kelechi",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // scroll every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials
    .slice(startIndex, startIndex + visibleCount)
    .concat(
      startIndex + visibleCount > testimonials.length
        ? testimonials.slice(0, (startIndex + visibleCount) % testimonials.length)
        : []
    );

  return (
    <section className="bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 flex items-center justify-center gap-3">
        <FontAwesomeIcon icon={faComments} className="text-indigo-500 text-4xl" />
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-500 ease-in-out">
        {visibleTestimonials.map(({ quote, name, role, image }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md object-cover"
            />
            <p className="text-lg italic text-gray-700">"{quote}"</p>
            <footer className="mt-4 text-sm text-gray-500">— {name}, {role}</footer>
          </div>
        ))}
      </div>
    </section>
  );

};

export default Testimonials;