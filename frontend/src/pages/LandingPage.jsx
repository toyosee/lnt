import HeroBanner from '../components/landingpage/HeroBanner';
// import SearchBar from './landingpage/SearchBar';
import UserSegments from '../components/landingpage/UserSegments';
import PlatformHighlights from '../components/landingpage/PlatformHighlights';
import Testimonials from '../components/landingpage/Testimonials';
import AppLinks from '../components/landingpage/Applinks';

const LandingPage = () => (
  <>
    <HeroBanner />
    {/* <SearchBar /> */}
    <UserSegments />
    <PlatformHighlights />
    <Testimonials />
    <AppLinks />
  </>
);

export default LandingPage;