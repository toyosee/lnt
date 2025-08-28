const SearchBar = () => (
  <section className="bg-white shadow-md p-6 rounded-lg max-w-4xl mx-auto -mt-10 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Location */}
      <input type="text" placeholder="Location" className="border px-4 py-2 rounded" />
      {/* Price */}
      <select className="border px-4 py-2 rounded">
        <option>Price Range</option>
        <option>₦0 - ₦5M</option>
        <option>₦5M - ₦15M</option>
        <option>₦15M+</option>
      </select>
      {/* Purpose */}
      <select className="border px-4 py-2 rounded">
        <option>Purpose</option>
        <option>Rent</option>
        <option>Sale</option>
      </select>
      {/* Type */}
      <select className="border px-4 py-2 rounded">
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Studio</option>
      </select>
    </div>
  </section>
);

export default SearchBar;