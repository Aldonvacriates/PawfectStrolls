import React from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/style.css";
import "../styles/page1-res.css";
import "../styles/page1-mob-view.css";
import "../styles/privacy-policy-sec.css";

const PrivacyPolicy = () => {
  return (
    <div className="page1-wrap">
      <Header />
      <main className="pp">
        <section className="pp-hero">
          <div className="pp-container">
            <p className="pp-eyebrow">Pawfect Strolls LLC</p>
            <h1 className="pp-title">Privacy Policy & SMS Terms</h1>
            <p className="pp-subtitle">
              How we collect, use, and protect your information — including SMS
              messaging consent.
            </p>

            <div className="pp-meta">
              <span>Last updated: January 2026</span>
              <span className="pp-dot">/</span>
              <a className="pp-link" href="#sms-terms">
                Jump to SMS Terms
              </a>
            </div>
          </div>
        </section>

        <section className="pp-body">
          <div className="pp-container pp-grid">
            <aside className="pp-toc" aria-label="Page navigation">
              <div className="pp-card">
                <h2 className="pp-card-title">On this page</h2>
                <nav className="pp-nav">
                  <a href="#info-we-collect">Information we collect</a>
                  <a href="#how-we-use">How we use information</a>
                  <a href="#data-sharing">Data sharing</a>
                  <a href="#sms-terms">SMS messaging terms</a>
                  <a href="#opt-in">How SMS opt-in works</a>
                  <a href="#opt-out">Opting out</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>

              <div className="pp-card pp-callout" role="note">
                <h3 className="pp-callout-title">Quick SMS reminder</h3>
                <p className="pp-callout-text">
                  Reply <strong>STOP</strong> to unsubscribe,{" "}
                  <strong>HELP</strong> for help. Message & data rates may
                  apply.
                </p>
              </div>
            </aside>

            <article className="pp-content">
              <section id="info-we-collect" className="pp-section">
                <h2>1. Information we collect</h2>
                <p>
                  We may collect information you provide to us, such as your
                  name, phone number, email address, service address, and
                  pet/service details needed to deliver our services.
                </p>
              </section>

              <section id="how-we-use" className="pp-section">
                <h2>2. How we use information</h2>
                <ul>
                  <li>Provide and manage pet care services</li>
                  <li>
                    Send booking confirmations, schedule updates, and service
                    notifications
                  </li>
                  <li>Provide customer support</li>
                  <li>Send promotions only when proper opt-in is provided</li>
                </ul>
              </section>

              <section id="data-sharing" className="pp-section">
                <h2>3. Data sharing</h2>
                <ul>
                  <li>
                    <strong>
                      Customer data is not shared with third parties for
                      promotional or marketing purposes.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Mobile opt-in and consent are never shared with anyone for
                      any purpose.
                    </strong>{" "}
                    Any information sharing that may be mentioned elsewhere in
                    this policy excludes mobile opt-in data.
                  </li>
                </ul>
              </section>

              <section id="sms-terms" className="pp-section">
                <h2>4. SMS messaging terms and conditions</h2>

                <div className="pp-highlight">
                  <p>
                    By providing your phone number and agreeing to receive
                    texts, you consent to receive text messages from{" "}
                    <strong>Pawfect Strolls LLC</strong>, from{" "}
                    <strong>435-241-3838</strong> regarding account
                    notifications, customer care, delivery/service
                    notifications, and marketing.
                    <strong> Consent is not a condition of purchase.</strong>
                  </p>
                  <p>
                    Message frequency varies. Message & data rates may apply.
                    You can reply <strong>STOP</strong> to unsubscribe at any
                    time or <strong>HELP</strong> for assistance. You can also
                    contact us at <strong>435-241-3838</strong> or{" "}
                    <strong>hello@pawfectstrolls.com</strong>.
                    <strong>
                      {" "}
                      Mobile opt-in information is never shared with third
                      parties.
                    </strong>
                  </p>
                </div>
              </section>

              <section id="opt-in" className="pp-section">
                <h2>5. How SMS opt-in works</h2>
                <p>
                  Our primary method is website opt-in. Contacts provide their
                  phone number and check a box to opt in to messaging. They can
                  decline by leaving the box unchecked.
                </p>
                <p className="pp-note">
                  If verbal opt-in is used, we only send transactional/service
                  messages (no marketing/promotional texts).
                </p>
              </section>

              <section id="opt-out" className="pp-section">
                <h2>6. Opting out</h2>
                <p>
                  You may opt out at any time by replying <strong>STOP</strong>.
                  For help, reply <strong>HELP</strong>. You can also contact us
                  using the details below.
                </p>
              </section>

              <section id="contact" className="pp-section">
                <h2>7. Contact</h2>
                <div className="pp-contact">
                  <div>
                    <div className="pp-label">Business</div>
                    <div>Pawfect Strolls LLC</div>
                  </div>
                  <div>
                    <div className="pp-label">Phone</div>
                    <a className="pp-link" href="tel:4352413838">
                      435-241-3838
                    </a>
                  </div>
                  <div>
                    <div className="pp-label">Email</div>
                    <a
                      className="pp-link"
                      href="mailto:hello@pawfectstrolls.com"
                    >
                      hello@pawfectstrolls.com
                    </a>
                  </div>
                </div>
              </section>

              <div className="pp-bottom">
                <a className="pp-button" href="/">
                  Back to home
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
