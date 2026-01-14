import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Your existing styles (keep whatever your project uses)
import "../styles/style.css";
import "../styles/page1-res.css";
import "../styles/page1-mob-view.css";
import "../styles/privacy-policy-sec.css";

// AOS (matches your About section style)
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Update this URL to your desired hero image (served from /public or a CDN)
const HERO_DOG_TRUST =
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80";

type ModalType = "success" | "error";
type ModalState =
  | { open: false; type: ModalType; title: string; message: string }
  | { open: true; type: ModalType; title: string; message: string };


    const PrivacyPolicy = () => {
  // ✅ Replace with your Formspree endpoint:
  // Example: https://formspree.io/f/abcdwxyz
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjggvqyr";

  // ✅ Direct link Grasshopper wants (link to the page section where opt-in occurs)
  const optInUrl = useMemo(
    () => "https://www.pawfectstrolls.com/privacy-policy#sms-optin",
    []
  );

  const toc = useMemo(
    () => [
      { id: "info-we-collect", label: "Information we collect" },
      { id: "how-we-use", label: "How we use information" },
      { id: "data-sharing", label: "Data sharing" },
      { id: "sms-terms", label: "SMS messaging terms" },
      { id: "sms-optin", label: "SMS opt-in form (website)" },
      { id: "opt-in", label: "How SMS opt-in works" },
      { id: "opt-out", label: "Opting out" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // ===== AOS Init =====
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // ===== Auto-highlight TOC on scroll =====
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    const sections = toc
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [toc]);

  // ===== Formspree Opt-in Form =====
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedOk, setSubmittedOk] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeModal = () =>
    setModal((m) => ({ ...m, open: false } as ModalState));

  useEffect(() => {
    if (!modal.open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modal.open]);

  async function handleOptInSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    // Basic guard
    if (!smsConsent) return;

    setSubmitting(true);

    try {
      const payload = {
        name,
        phone,
        smsConsent: "yes",
        page: "/privacy-policy",
        optInLocation: optInUrl,
        // Helpful for audit/compliance:
        consentText:
          "I agree to receive SMS messages from Pawfect Strolls LLC at 435-241-3838 for service updates, customer care, and promotions. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Mobile opt-in information is never shared.",
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Formspree request failed");

      setSubmittedOk(true);
      setName("");
      setPhone("");
      setSmsConsent(false);

      setModal({
        open: true,
        type: "success",
        title: "Success!",
        message:
          "Thank you — your information was submitted successfully. If you opted in, you may receive texts from Pawfect Strolls LLC.",
      });
    } catch (err) {
      setModal({
        open: true,
        type: "error",
        title: "Something went wrong",
        message:
          "We couldn't submit your request right now. Please try again, or contact us at hello@pawfectstrolls.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page1-wrap">
      <Header />

      <main className="pp">
        {/* HERO */}
        <section className="pp-hero">
          <div className="pp-container">
            <div className="pp-hero-grid">
              <div
                className="pp-hero-left"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <p className="pp-eyebrow">Pawfect Strolls LLC</p>
                <h1 className="pp-title">Privacy Policy & SMS Terms</h1>
                <p className="pp-subtitle">
                  How we collect, use, and protect your information — including
                  SMS messaging consent.
                </p>

                <div className="pp-meta">
                  <span>Last updated: January 2026</span>
                  <span className="pp-dot">•</span>
                  <a className="pp-link" href="#sms-terms">
                    Jump to SMS Terms
                  </a>
                  <span className="pp-dot">•</span>
                  <a className="pp-link" href="#sms-optin">
                    Go to SMS Opt-In Form
                  </a>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div
                className="pp-hero-right"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="pp-hero-imgwrap">
                  <img
                    className="pp-hero-img"
                    src={HERO_DOG_TRUST}
                    alt="Dog and owner building trust"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="pp-body">
          <div className="pp-container pp-grid">
            {/* TOC */}
            <aside className="pp-toc" aria-label="Page navigation">
              <div
                className="pp-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <h2 className="pp-card-title">On this page</h2>
                <nav className="pp-nav">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={activeId === item.id ? "is-active" : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div
                className="pp-card pp-callout"
                role="note"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="90"
              >
                <h3 className="pp-callout-title">Quick SMS reminder</h3>
                <p className="pp-callout-text">
                  Reply <strong>STOP</strong> to unsubscribe,{" "}
                  <strong>HELP</strong> for help. Message &amp; data rates may
                  apply.
                </p>
              </div>
            </aside>

            {/* CONTENT */}
            <article
              className="pp-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <section
                id="info-we-collect"
                className="pp-section"
                data-aos="fade-up"
              >
                <h2>1. Information we collect</h2>
                <p>
                  We may collect information you provide to us, such as your
                  name, phone number, email address, service address, and
                  pet/service details needed to deliver our services.
                </p>
              </section>

              <section
                id="how-we-use"
                className="pp-section"
                data-aos="fade-up"
              >
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

              <section
                id="data-sharing"
                className="pp-section"
                data-aos="fade-up"
              >
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

              <section id="sms-terms" className="pp-section" data-aos="fade-up">
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
                    Message frequency varies. Message &amp; data rates may
                    apply. You can reply <strong>STOP</strong> to unsubscribe at
                    any time or <strong>HELP</strong> for assistance. You can
                    also contact us at <strong>435-241-3838</strong> or{" "}
                    <strong>hello@pawfectstrolls.com</strong>.
                    <strong>
                      {" "}
                      Mobile opt-in information is never shared with third
                      parties.
                    </strong>
                  </p>
                </div>
              </section>

              {/* ✅ OPT-IN FORM SECTION (Direct link for Grasshopper) */}
              <section id="sms-optin" className="pp-section" data-aos="fade-up">
                <h2>5. SMS opt-in form (website)</h2>
                <p>
                  Contacts provide their phone number and check the box to opt
                  in to messaging. They may decline by leaving the box
                  unchecked.
                </p>

                <div className="pp-form-card">
                  {submittedOk ? (
                    <div className="pp-thanks" role="status" aria-live="polite">
                      <h3 className="pp-thanks-title">Thank you!</h3>
                      <p className="pp-thanks-text">
                        Your submission was received. If you opted in, you may
                        receive SMS updates from Pawfect Strolls.
                      </p>
                      <button
                        className="pp-submit"
                        type="button"
                        onClick={() => setSubmittedOk(false)}
                      >
                        Submit another response
                      </button>
                    </div>
                  ) : (
                    <form className="pp-form" onSubmit={handleOptInSubmit}>
                      <label className="pp-field">
                        <span className="pp-field-label">Name (optional)</span>
                        <input
                          className="pp-input"
                          type="text"
                          autoComplete="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>

                      <label className="pp-field">
                        <span className="pp-field-label">
                          Mobile phone number
                        </span>
                        <input
                          className="pp-input"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="(435) 241-3838"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </label>

                      <label className="pp-consent">
                        <input
                          type="checkbox"
                          checked={smsConsent}
                          onChange={(e) => setSmsConsent(e.target.checked)}
                          required
                        />
                        <span>
                          I agree to receive SMS messages from{" "}
                          <strong>Pawfect Strolls LLC</strong> at{" "}
                          <strong>435-241-3838</strong> for service updates,
                          customer care, and promotions. Consent is not a
                          condition of purchase. Message frequency varies.
                          Message &amp; data rates may apply. Reply{" "}
                          <strong>STOP</strong> to unsubscribe or{" "}
                          <strong>HELP</strong> for assistance. Mobile opt-in
                          information is never shared.
                        </span>
                      </label>

                      {/* <p className="pp-small">
                        Direct link to this opt-in section:{" "}
                        <a className="pp-link" href={optInUrl}>
                          {optInUrl}
                        </a>
                      </p> */}

                      <div className="pp-form-actions">
                        <button
                          className="pp-submit"
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </section>

              <section id="opt-in" className="pp-section" data-aos="fade-up">
                <h2>6. How SMS opt-in works</h2>
                <p>
                  Our primary method is website opt-in. Contacts provide their
                  phone number and check a box to opt in to messaging. They can
                  decline by leaving the box unchecked.
                </p>
                <p className="pp-note">
                  Direct link to the opt-in location:{" "}
                  <a className="pp-link" href={optInUrl}>
                    {optInUrl}
                  </a>
                </p>
                <p className="pp-note">
                  If verbal opt-in is used, we only send transactional/service
                  messages (no marketing/promotional texts).
                </p>
              </section>

              <section id="opt-out" className="pp-section" data-aos="fade-up">
                <h2>7. Opting out</h2>
                <p>
                  You may opt out at any time by replying <strong>STOP</strong>.
                  For help, reply <strong>HELP</strong>. You can also contact us
                  using the details below.
                </p>
              </section>

              <section id="contact" className="pp-section" data-aos="fade-up">
                <h2>8. Contact</h2>
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

              <div className="pp-bottom" data-aos="fade-up">
                <a className="pp-button" href="/">
                  Back to home
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* MODAL */}
        {modal.open && (
          <div
            className="pp-modal-overlay"
            role="presentation"
            onClick={closeModal}
          >
            <div
              className={`pp-modal ${
                modal.type === "success" ? "is-success" : "is-error"
              }`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="pp-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pp-modal-header">
                <h3 id="pp-modal-title" className="pp-modal-title">
                  {modal.title}
                </h3>
                <button
                  className="pp-modal-close"
                  type="button"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <p className="pp-modal-message">{modal.message}</p>

              <div className="pp-modal-actions">
                <button
                  className="pp-submit"
                  type="button"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy