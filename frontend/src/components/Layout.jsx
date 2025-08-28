// Layout.jsx
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    
    <main className="pt-20">
      <Outlet />
    </main>

    <Footer />
  </>
);

export default Layout;