import { Dialog } from '@headlessui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaBath,
  FaDog,
  FaCouch,
  FaCalendarAlt,
  FaPhoneAlt,
  FaPeopleArrows
} from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const HousingModal = ({ isOpen, onClose, house }) => {
  if (!house) return null;

  const generateMapLink = (lat, lng) =>
    `https://www.google.com/maps?q=${lat},${lng}`;

  const generateDirectionsLink = (lat, lng) =>
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative z-50 flex items-start justify-center min-h-screen p-6">
        <div className="bg-white text-gray-900 rounded-xl shadow-2xl max-w-3xl w-full mx-auto overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <img
              src={house.image}
              alt={house.title}
              className="w-full h-[250px] sm:h-[350px] object-cover rounded-t-xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full shadow hover:bg-gray-100"
            >
              &times;
            </button>
          </div>

          {/* Details Section */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl text-gray-600 font-bold mb-2">{house.title}</h2>
              <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <strong>Location:</strong> {house.location}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaMoneyBillWave className="text-green-600" />
            <strong>Price:</strong> ₦{house.price.toLocaleString()}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaBed className="text-indigo-500" />
            <strong>Bedrooms:</strong> {house.bedrooms}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaBath className="text-indigo-500" />
            <strong>Bathrooms:</strong> {house.bathrooms}
            </p>
                          
            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaPeopleArrows className="text-purple-600" />
            <strong>No. of Tenants:</strong> {house.number_of_tenants ? house.number_of_tenants : 'Not specified'}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaDog className="text-yellow-600" />
            <strong>Pets Allowed:</strong> {house.petsAllowed ? 'Yes' : 'No'}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaCouch className="text-purple-600" />
            <strong>Furnished:</strong> {house.furnished ? 'Yes' : 'No'}
            </p>

             <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaCouch className="text-purple-600" />
            <strong>Verified:</strong> {house.isVerified? 'Yes' : 'No'}
            </p>

            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-600" />
            <strong>Available From:</strong>{' '}
            {house.availableFrom
                ? new Date(house.availableFrom).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }).replace(',', '/').replace(' ', '/')
                : 'Not specified'}
            </p>
                          
            <p className="text-gray-700 mb-1 flex items-center gap-2">
            <FaPhoneAlt className="text-purple-600" />
            <strong>Contact:</strong> {house.landlord_contact ? house.landlord_contact : 'Not available'}
            </p>
            <button
                onClick={onClose}
                className="mt-6 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800"
              >
                Close
              </button>
            </div>

            <div>
              <p className="text-gray-600 mb-4">
                {house.description || 'No additional description available.'}
              </p>

              <p className="text-gray-700 font-semibold mb-2">Amenities:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {house.amenities && house.amenities.length > 0 ? (
                  house.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-600">No amenities available.</span>
                )}
              </div>

              {/* Map Section */}
              {house.latitude && house.longitude && (
                <>
                  <div className="h-48 rounded overflow-hidden">
                    <MapContainer
                      center={[house.latitude, house.longitude]}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[house.latitude, house.longitude]}>
                        <Popup>{house.title}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>

                  {/* Map Actions */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href={generateMapLink(house.latitude, house.longitude)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800"
                    >
                      Open in Maps
                    </a>
                    <a
                      href={generateDirectionsLink(house.latitude, house.longitude)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800"
                    >
                      Get Directions
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default HousingModal;