import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/layouts/ScrollToTop.jsx';
import LandingPage from './pages/LandingPage.jsx';
import HousingList from './components/HousingList.jsx';
import AboutUs from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import FAQ from './pages/Faq.jsx';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AdminDashboard from './pages/dashboards/AdminDashboard.jsx';
import InvestorDashboard from './pages/dashboards/InvestorDashboard.jsx';
import AgentDashboard from './pages/dashboards/AgentDashboard.jsx';
import LandlordDashboard from './pages/dashboards/LandlordDashboard.jsx';
import TenantDashboard from './pages/dashboards/TenantDashboard.jsx';
import HousingModal from './components/HousingModal.jsx';
import ProfileForm from './components/ProfileForm.jsx';
import ViewProfile from './components/ViewProfile.jsx';
import NotFound from './pages/NotFound.jsx';

import UserProvider from './context/UserProvider.jsx';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute.jsx';


const App = () => {
    return (
    <UserProvider>
      <Toaster position='top-right' />
    <BrowserRouter>
                <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
          <Route index element={<LandingPage />} />
          <Route path="list-property" element={<HousingList />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
                      {/* Add other routes as needed */}
                      
        {/* Protected Route Example */}
          <Route
            path="/dashboards/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
            />
            <Route
            path="/dashboards/investor"
            element={
              <ProtectedRoute allowedRoles={['investor']}>
                <InvestorDashboard />
              </ProtectedRoute>
            }
                      />
            <Route
            path="/dashboards/agent"
            element={
              <ProtectedRoute allowedRoles={['agent']}>
                <AgentDashboard />
              </ProtectedRoute>
            }
            />
            <Route
            path="/dashboards/landlord"
            element={
              <ProtectedRoute allowedRoles={['landlord']}>
                <LandlordDashboard />
              </ProtectedRoute>
            }
            />
            <Route
            path="/dashboards/tenant"
            element={
              <ProtectedRoute allowedRoles={['tenant']}>
                <TenantDashboard />
              </ProtectedRoute>
            }
            />
        <Route
            path="/profile"
            element={
                <ProtectedRoute>
                <ProfileForm />
                </ProtectedRoute>
            }
            />
        <Route
            path="/view-profile"
            element={
                <ProtectedRoute>
                    <ViewProfile />
                </ProtectedRoute>
            }
                      />
            <Route
            path="/housing-details"
            element={
                <ProtectedRoute>
                    <HousingModal />
                </ProtectedRoute>
            }
            />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App