import HeroBanner from './landingpage/HeroBanner';
// import SearchBar from './landingpage/SearchBar';
import UserSegments from './landingpage/UserSegments';
import PlatformHighlights from './landingpage/PlatformHighlights';
import Testimonials from './landingpage/Testimonials';
import AppLinks from './landingpage/Applinks';

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