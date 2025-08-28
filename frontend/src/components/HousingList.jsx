import { useEffect, useState } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt, FaMoneyBillWave, FaSearch, FaSortAmountDown, FaMicrophone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import HousingModal from './HousingModal.jsx';

import { Link } from 'react-router-dom'; // Make sure this is at the top


const HousingList = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('/housingData.json')
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
        setFilteredHouses(data);
      })
      .catch((err) => console.error('Error loading housing data:', err));
  }, []);
  useEffect(() => {
    let filtered = houses.filter((house) => {
      const matchesSearch =
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBedrooms =
        minBedrooms === '' || house.bedrooms >= parseInt(minBedrooms);

      const matchesLocation =
        locationFilter === '' || house.location === locationFilter;

      const matchesPrice =
        priceRange === '' ||
        (priceRange === 'low' && house.price < 5000000) ||
        (priceRange === 'mid' && house.price >= 5000000 && house.price <= 15000000) ||
        (priceRange === 'high' && house.price > 15000000);

      return matchesSearch && matchesBedrooms && matchesLocation && matchesPrice;
    });

    if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'bedrooms-asc') {
      filtered.sort((a, b) => a.bedrooms - b.bedrooms);
    } else if (sortOption === 'bedrooms-desc') {
      filtered.sort((a, b) => b.bedrooms - a.bedrooms);
    }

    setFilteredHouses(filtered);
    setCurrentPage(1);
  }, [searchTerm, minBedrooms, locationFilter, priceRange, sortOption, houses]);

  const openModal = (house) => {
    setSelectedHouse(house);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedHouse(null);
    setIsModalOpen(false);
  };

  const totalPages = Math.ceil(filteredHouses.length / itemsPerPage);
  const paginatedHouses = filteredHouses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    const uniqueLocations = [...new Set(houses.map((h) => h.location))];
return (
  <div className="bg-gray-100 min-h-screen p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faHouse} className="text-blue-600 text-4xl" />
          <span className="tracking-wide">Featured Properties</span>
        </h2>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search title or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-gray-700 pr-4 py-2 rounded border border-gray-300 w-full"
          />
        </div>

        <div className="relative">
          <FaBed className="absolute top-3 left-3 text-indigo-500" />
          <input
            type="number"
            placeholder="Min Bedrooms"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
            className="pl-10 text-gray-700 pr-4 py-2 rounded border border-gray-300 w-full"
          />
        </div>

        <div className="relative">
          <FontAwesomeIcon icon={faLocationDot} className="absolute top-3 left-3 text-red-500" />
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="pl-10 text-gray-700 pr-4 py-2 rounded border border-gray-300 w-full"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <FaMoneyBillWave className="absolute top-3 left-3 text-green-600" />
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="pl-10 text-gray-700 pr-4 py-2 rounded border border-gray-300 w-full"
          >
            <option value="">All Prices</option>
            <option value="low">Below ₦5M</option>
            <option value="mid">₦5M - ₦15M</option>
            <option value="high">Above ₦15M</option>
          </select>
        </div>

        <div className="relative">
          <FaSortAmountDown className="absolute top-3 left-3 text-gray-500" />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="pl-10 pr-4 text-gray-700 py-2 rounded border border-gray-300 w-full"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="bedrooms-asc">Bedrooms: Fewest First</option>
            <option value="bedrooms-desc">Bedrooms: Most First</option>
          </select>
        </div>
        </div>
        {/* Displaying the number of results found */}
                {!houses.length ? (
        <p className="text-center text-gray-500 mt-10">Loading houses...</p>
        ) : filteredHouses.length === 0 && searchTerm.trim() ? (
        <div className="text-center text-gray-600 mt-10">
        <p className="text-lg font-semibold">
            We do not have available properties in "<span className="text-red-500">{searchTerm}</span>"
            </p>
            <p className="text-sm mt-2">Try searching another area or check back later.</p>
        </div>
        ) : filteredHouses.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">No Houses Found</div>
        ) : null}

        {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedHouses.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={house.image}
              alt={house.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faHouse} className="text-blue-600" />
                {house.title}
              </h3>

              <p className="text-gray-600 mb-1 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {house.location}
              </p>

              <p className="text-gray-600 mb-1 flex items-center gap-2">
                <FaMoneyBillWave className="text-green-600" />
                ₦{house.price.toLocaleString()}
              </p>

              <p className="text-gray-600 flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <FaBed className="text-indigo-500" /> {house.bedrooms} Bed
                </span>
                <span className="flex items-center gap-1">
                  <FaBath className="text-indigo-500" /> {house.bathrooms} Bath
                </span>
              </p>

              <button
                className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-700 transition duration-200"
                onClick={() => openModal(house)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <HousingModal isOpen={isModalOpen} onClose={closeModal} house={selectedHouse} />
    </div>
  );
};

export default HousingList;