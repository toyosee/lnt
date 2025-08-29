// main.jsx or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout.jsx';
import LandingPage from './components/LandingPage.jsx';
import HousingList from './components/HousingList.jsx';
import AboutUs from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';
import FAQ from './components/pages/Faq.jsx';
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="list-property" element={<HousingList />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);