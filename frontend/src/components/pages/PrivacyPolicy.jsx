import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShieldAlt,
    faBalanceScale,
    faPhone,
    faLocation,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicyPage = () => (
  <section className="bg-gradient-to-r from-purple-50 via-indigo-100 to-pink-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
      <FontAwesomeIcon icon={faShieldAlt} className="text-pink-500 text-4xl" />
      LnT Privacy Policy
    </h2>

    <p className="text-sm text-gray-500 mb-8">
      Effective Date: 01/01/2025 &nbsp; | &nbsp; Last Updated: 27/08/2025
    </p>

    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-left space-y-6 text-gray-700">
      <p>
        LnT Partners Ltd. is committed to protecting the privacy and security of our users’ data. This Privacy Policy explains how we collect, use, store, and share information when you interact with our platform, mobile applications, and related services.
      </p>
      <p>
        By using LnT’s platform, you consent to the practices described below.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">1. Information We Collect</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Personal Information:</strong> Full name, phone number, email address, date of birth, gender. Identification documents (e.g., National ID, Passport, Driver’s License).</li>
        <li><strong>Property & Business Information:</strong> Land titles, lease agreements, property descriptions, photos, rental agreements.</li>
        <li><strong>Financial Information:</strong> Bank details, investment portfolios, ROI data, payment records, credit history.</li>
        <li><strong>Technical & Usage Information:</strong> Device identifiers, browser type, IP address, geolocation, login history, transaction logs, chat messages.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">2. How We Use Information</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Facilitate property management, rental, sales, and investment activities.</li>
        <li>Verify user identity and process payments.</li>
        <li>Provide customer support and dispute resolution.</li>
        <li>Improve platform functionality and deliver personalized content.</li>
        <li>Ensure compliance with NDPR and GDPR regulations.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">3. Information Sharing</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Service Providers:</strong> Paystack, Flutterwave, KYC partners, hosting providers.</li>
        <li><strong>Legal Authorities:</strong> When required by law or to prevent fraud.</li>
        <li><strong>Business Partners:</strong> With user consent for joint ventures.</li>
        <li><strong>Internal Stakeholders:</strong> Admins and authorized agents only.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">4. Data Retention</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Data retained as long as necessary for operations or legal compliance.</li>
        <li>Financial records stored for 7 years.</li>
        <li>Users may request deletion unless legally restricted.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">5. Data Security</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>End-to-end encryption and Two-Factor Authentication (2FA).</li>
        <li>Regular penetration testing and audits.</li>
        <li>Role-based access control and future blockchain logging.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">6. User Rights</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access, correct, delete, or transfer personal data.</li>
        <li>Withdraw consent from marketing communications.</li>
        <li>Submit requests via: <a href="mailto:lntpartnerx@gmail.com" className="text-indigo-600 hover:underline">lntpartnerx@gmail.com</a></li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800">7. Third-Party Links</h3>
      <p>We are not responsible for the privacy practices of linked services. Please review their policies independently.</p>

      <h3 className="text-xl font-semibold text-gray-800">8. Children’s Privacy</h3>
      <p>We do not knowingly collect data from individuals under 18. Such accounts will be removed if discovered.</p>

      <h3 className="text-xl font-semibold text-gray-800">9. Updates to Privacy Policy</h3>
      <p>We may update this policy periodically. Users will be notified before significant changes take effect.</p>

      <h3 className="text-xl font-semibold text-gray-800">10. Contact Us</h3>
      <p>
        LnT Partners Ltd.<br />
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" /> Email: <a href="mailto:lntpartnerx@gmail.com" className="text-indigo-600 hover:underline">lntpartnerx@gmail.com</a><br />
        <FontAwesomeIcon icon={faPhone} className="text-gray-500" /> Phone: 08012288882<br />
        <FontAwesomeIcon icon={faLocation} className="text-gray-500" /> Address: C 1 Independence Way, Kaduna
      </p>

        <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
        <FontAwesomeIcon icon={faBalanceScale} className="text-pink-500" />
        Compliance Note: This Privacy Policy aligns with NDPR and GDPR principles. It covers operations, financials, and the market environment of LnT.
        </p>
    </div>
  </section>
);

export default PrivacyPolicyPage;