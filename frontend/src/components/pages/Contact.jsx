import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section className="bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-3">
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-indigo-500 text-4xl" />
      Contact Us
    </h2>

    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
      Whether you're a tenant, landlord, or curious visitor, we’d love to hear from you. Drop us a message and we’ll get back to you shortly.
    </p>

    <form className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 text-left">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" className="w-full border px-4 py-2 rounded mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" className="w-full border px-4 py-2 rounded mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea rows="5" className="w-full border px-4 py-2 rounded mt-1" />
      </div>
      <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;