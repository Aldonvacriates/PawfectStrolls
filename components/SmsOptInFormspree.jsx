import React, { useEffect, useId, useState } from "react";

export default function SmsOptInFormspree({
  formspreeEndpoint,
  directLink = "https://www.pawfectstrolls.com/privacy-policy#sms-optin",
}) {
  const formId = useId();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submittedOk, setSubmittedOk] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  // Close on Escape
  useEffect(() => {
    if (!modal.open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modal.open]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      const payload = {
        name,
        phone,
        smsConsent: smsConsent ? "yes" : "no",
        page: "/privacy-policy",
        optInLocation: directLink,
        // Helpful for audit/compliance:
        consentText:
          "I agree to receive SMS messages from Pawfect Strolls LLC at 435-241-3838 for service updates, customer care, and promotions. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Mobile opt-in information is never shared.",
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Formspree request failed");
      }

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
    <>
      <div className="pp-form-card">
        {submittedOk ? (
          <div className="pp-thanks" role="status" aria-live="polite">
            <h3 className="pp-thanks-title">Thank you!</h3>
            <p className="pp-thanks-text">
              Your request was received. If you opted in, you may receive SMS
              updates from Pawfect Strolls.
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
          <form
            className="pp-form"
            onSubmit={handleSubmit}
            aria-describedby={`${formId}-help`}
          >
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

            <label className="pp-field pp-field-full">
              <span className="pp-field-label">Mobile phone number</span>
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
                <strong>435-241-3838</strong> for service updates, customer
                care, and promotions. Consent is not a condition of purchase.
                Message frequency varies. Message &amp; data rates may apply.
                Reply <strong>STOP</strong> to unsubscribe or{" "}
                <strong>HELP</strong> for assistance. Mobile opt-in information
                is never shared.
              </span>
            </label>

            <p className="pp-small" id={`${formId}-help`}>
              Direct link to this opt-in section:{" "}
              <a className="pp-link" href={directLink}>
                {directLink}
              </a>
            </p>

            <div className="pp-form-actions">
              <button className="pp-submit" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Modal */}
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
              <button className="pp-submit" type="button" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
