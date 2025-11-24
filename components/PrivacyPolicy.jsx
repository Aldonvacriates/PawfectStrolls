import Home3Header from "../components-home3/Home3Header";
import Home3Footer from "../components-home3/Home3Footer";
import { Link } from "react-router-dom";
import "../styles/page3.css";
import "../styles/page3-res.css";
import "../styles/page3-mob-view.css";
import "../styles/privacy.css";

const PrivacyPolicy = () => {
  const lastUpdated = "November 23, 2025";

  return (
    <>
      <Home3Header />

      <section className="Home3-Detail-Banner-sec privacy-hero">
        <div className="conntainer">
          <div className="row">
            <div className="col-lg-12">
              <div className="Home3-Detail-Banner-tit-wrap privacy-hero-wrap">
                <h1 className="Home3-Detail-Banner-main-tit">
                  Privacy Policy
                </h1>
                <p className="privacy-lead">
                  How Pawfect Strolls collects, uses, and protects your
                  information whenever you visit our site, shop, or book a
                  service with us.
                </p>
                <ul className="Home3-Detail-Banner-nav">
                  <li className="home3Link">
                    <Link to="/">Home</Link>
                  </li>
                  <li>/</li>
                  <li>Privacy Policy</li>
                </ul>
                <p className="privacy-meta">Last updated: {lastUpdated}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="privacy-intro-card">
                <h3>Your Privacy Matters</h3>
                <p>
                  We value your trust and are committed to keeping your personal
                  data safe. This policy explains what we collect, why we use
                  it, and the choices you have about your information.
                </p>
              </div>
            </div>
          </div>

          <div className="row privacy-policy-grid">
            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>Information We Collect</h4>
                <ul>
                  <li>
                    Contact details such as your name, email, phone number, and
                    address when you book services or subscribe.
                  </li>
                  <li>
                    Pet details you share so we can tailor care, including pet
                    names, breed, age, preferences, or health notes.
                  </li>
                  <li>
                    Payment and transaction details processed securely through
                    our payment partners.
                  </li>
                  <li>
                    Usage data such as pages viewed, device type, browser, and
                    interactions that help us improve the experience.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>How We Use Your Information</h4>
                <ul>
                  <li>
                    To provide services you request, confirm bookings, and share
                    updates about your pet.
                  </li>
                  <li>
                    To personalize recommendations, offers, and site content
                    based on your interests.
                  </li>
                  <li>
                    To respond to support requests, questions, or feedback you
                    send us.
                  </li>
                  <li>
                    To maintain security, prevent fraud, and comply with legal
                    obligations.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>Cookies & Tracking</h4>
                <p>
                  We use cookies and similar technologies to remember your
                  preferences, measure site performance, and understand how
                  visitors use Pawfect Strolls. You can adjust cookie settings
                  through your browser, but some features may not work as
                  intended without them.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>Sharing Your Information</h4>
                <p>
                  We do not sell your personal information. We may share limited
                  data with trusted providers (for example, payment processing,
                  email delivery, or analytics) who are bound by confidentiality
                  and security obligations. If required by law, we may also
                  share data with regulators or to protect our rights.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>Data Security & Retention</h4>
                <p>
                  We use administrative, technical, and physical safeguards to
                  protect your information. We keep data only as long as needed
                  to deliver services, meet legal requirements, or resolve
                  disputes. When no longer required, data is securely deleted or
                  anonymized.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="privacy-policy-card">
                <h4>Your Rights & Choices</h4>
                <ul>
                  <li>Access or update your account and pet details.</li>
                  <li>Opt out of marketing emails at any time.</li>
                  <li>
                    Request deletion or restriction of your personal data where
                    applicable.
                  </li>
                  <li>
                    Ask questions about how we handle data or withdraw consent
                    where we rely on it.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="privacy-contact-card">
                <h4>Questions or Requests?</h4>
                <p>
                  If you have any questions about this Privacy Policy or want to
                  exercise your rights, contact us and we will help.
                </p>
                <div className="privacy-contact-actions">
                  <a href="mailto:hello@pawfectstrolls.com" className="primary-btn">
                    Email our team
                  </a>
                  <Link to="/contactus" className="secondary-btn">
                    Visit Contact page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Home3Footer />
    </>
  );
};

export default PrivacyPolicy;
