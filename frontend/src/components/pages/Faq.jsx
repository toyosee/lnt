import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

const faqData = {
  Landlords: [
    {
      question: "How do I list a property on LnT?",
      format: "Video Tutorial",
      channel: "YouTube, in-app help center",
      impact: "Simplifies onboarding, reduces support tickets"
    },
    {
      question: "How can I track rent payments from tenants?",
      format: "Infographic",
      channel: "Blog + LinkedIn posts",
      impact: "Reinforces trust in financial transparency"
    },
    {
      question: "What documents do I need for property verification?",
      format: "Step-by-step blog post",
      channel: "Blog + PDF guide",
      impact: "Positions LnT as professional & compliance-driven"
    }
  ],
  Tenants: [
    {
      question: "How do I find and book a property on LnT?",
      format: "Animated explainer video",
      channel: "Instagram Reels, YouTube Shorts",
      impact: "Boosts engagement, drives app downloads"
    },
    {
      question: "Can I pay rent in installments or through 'RentNowPayLater'?",
      format: "FAQ blog + infographic",
      channel: "Blog + Twitter/X thread",
      impact: "Increases adoption of payment features"
    },
    {
      question: "How do I raise a maintenance request?",
      format: "Short in-app walkthrough",
      channel: "In-app popup + support center",
      impact: "Reduces tenant frustration, increases retention"
    }
  ],
  Investors: [
    {
      question: "What investment opportunities does LnT offer?",
      format: "Data-driven blog post + ROI charts",
      channel: "Blog + LinkedIn",
      impact: "Builds credibility, attracts high-value clients"
    },
    {
      question: "How does the Investor Dashboard calculate ROI?",
      format: "Interactive infographic",
      channel: "Website landing page",
      impact: "Positions LnT as transparent and tech-driven"
    },
    {
      question: "What is the security of my investment documents?",
      format: "FAQ video + compliance blog",
      channel: "Blog + Email newsletter",
      impact: "Builds trust in data privacy & blockchain roadmap"
    }
  ],
  Agents: [
    {
      question: "How can I manage multiple property listings on LnT?",
      format: "Step-by-step video tutorial",
      channel: "YouTube + LinkedIn",
      impact: "Reduces onboarding friction, improves efficiency"
    },
    {
      question: "How do I track my commission earnings?",
      format: "Infographic",
      channel: "In-app guide + Instagram",
      impact: "Builds loyalty, increases platform activity"
    },
    {
      question: "What role do agents play in tenant verification?",
      format: "Blog + case study",
      channel: "Blog + Newsletter",
      impact: "Builds authority, improves KYC compliance adoption"
    }
  ],
  Admins: [
    {
      question: "How do admins verify listings and user KYC?",
      format: "Screencast video demo",
      channel: "Internal training + LinkedIn",
      impact: "Streamlines compliance, increases trust"
    },
    {
      question: "How are disputes resolved between landlords and tenants?",
      format: "Flowchart infographic",
      channel: "Help center + PDF guide",
      impact: "Reassures users about transparency & fairness"
    },
    {
      question: "What performance metrics can admins track?",
      format: "Data dashboard blog",
      channel: "Blog + LinkedIn",
      impact: "Highlights professionalism and operational excellence"
    }
  ],
  General: [
    {
      question: "Is LnT secure? How do you protect user data?",
      format: "Blog + Video",
      channel: "Trust-building, compliance"
    },
    {
      question: "Can I switch my role (e.g., Tenant → Landlord)?",
      format: "Infographic",
      channel: "Explains flexibility"
    },
    {
      question: "Is there a mobile app for Android & iOS?",
      format: "App demo video",
      channel: "Drives downloads"
    },
    {
      question: "How do I contact support?",
      format: "FAQ card",
      channel: "Quick accessibility"
    }
  ]
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleFAQ = (role, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [role]: prev[role] === index ? null : index
    }));
  };

  return (
    <section className="bg-gradient-to-r from-pink-50 via-indigo-100 to-purple-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center gap-3">
        <FontAwesomeIcon icon={faQuestionCircle} className="text-purple-500 text-4xl" />
        LnT Platform – FAQs
      </h2>

      <div className="max-w-4xl mx-auto space-y-12 text-left">
        {Object.entries(faqData).map(([role, faqs]) => (
          <div key={role}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{role}</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow transition duration-300">
                  <button
                    onClick={() => toggleFAQ(role, index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                    <FontAwesomeIcon
                      icon={openIndex[role] === index ? faChevronUp : faChevronDown}
                      className="text-gray-500"
                    />
                  </button>
                  {openIndex[role] === index && (
                    <div className="px-6 pb-4 text-gray-700 text-sm space-y-2">
                      <p><strong>Format:</strong> {faq.format}</p>
                      <p><strong>Channel:</strong> {faq.channel}</p>
                      {faq.impact && <p><strong>Impact:</strong> {faq.impact}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;