import { Link } from 'react-router-dom';
import heroImage from '../../assets/PathBanner.png'; // Adjust path as needed

console.log(heroImage)
const HeroBanner = () => (
  <section className="relative text-white py-32 px-6 min-h-[400px]">
  {/* Background image with overlay */}
  <div className="absolute inset-0 bg-[url('/images/image4.jpg')] bg-cover bg-center">
    <div className="bg-black/50 w-full h-full"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl mx-auto  p-6 rounded">
    <h1 className="text-4xl font-bold mb-4 text-white-900">Find Your Next Home or Investment</h1>
    <p className="mb-6 text-lg text-white-800">Smart tools for landlords, tenants, agents, and investors.</p>
    <div className="flex justify-center gap-4 flex-wrap">
      <Link to="/get-started">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black">Get Started</button>
      </Link>
      <Link to="/list-property">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black">List Property</button>
      </Link>
      <Link to="/list-property">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black">Explore Listings</button>
      </Link>
    </div>
  </div>
</section>
);

export default HeroBanner;