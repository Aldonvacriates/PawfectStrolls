import SubscribeMail from "../src/assets/home/subscribe-newsletter/Subscribe-mail.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SubscribeNewsletter = () => {
  const formRef = useRef();
  const [buttonText, setButtonText] = useState("Send Email");

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    const serviceID = "default_service";
    const templateID = "template_ttq5iaq";
    const publicKey = "Gk411-KkxOW2-mVlO";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setButtonText("Send Email");
        alert("Sent!");
        event.target.reset(); // Optional: Clears the form after sending
      })
      .catch((err) => {
        setButtonText("Send Email");
        alert(`Error: ${JSON.stringify(err)}`);
      });
  };

  return (
    <section className="subscribe-newsletter-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-newsletter-tit-wraper">
              <h3
                className="subscribe-newsletter-tit"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                Contact <b>Us</b> & Get Company News
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="subscribe-newsletter-form" // Renamed class slightly to imply a full form
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="2000"
                style={{ maxWidth: "600px", margin: "0 auto" }} // Inline style to center the larger form
              >
                {/* Icon (Optional - might look better at the top now) */}
                {/* <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <img
                    src={SubscribeMail}
                    alt="Subscribe Newsletter"
                    className="subscribe-newsletter-mail"
                    style={{ position: "relative", left: "auto", top: "auto" }} // Resetting absolute positioning if it existed
                  />
                </div> */}

                {/* Name Field */}
                <div className="field-group" style={{ marginBottom: "15px" }}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    className="form-control" // Assuming you might have bootstrap, if not, style this
                    required
                    style={{ width: "100%", padding: "10px" }}
                  />
                </div>

                {/* Phone Field */}
                {/* <div className="field-group" style={{ marginBottom: "15px" }}>
                  <input
                    type="tel"
                    name="contact_number"
                    placeholder="Phone Number"
                    className="form-control"
                    style={{ width: "100%", padding: "10px" }}
                  />
                </div> */}

                {/* Email Field */}
                <div className="field-group" style={{ marginBottom: "15px" }}>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="form-control"
                    style={{ width: "100%", padding: "10px" }}
                  />
                </div>

                {/* Address Field */}
                {/* <div className="field-group" style={{ marginBottom: "15px" }}>
                  <input
                    type="text"
                    name="user_address"
                    placeholder="Street Address"
                    className="form-control"
                    style={{ width: "100%", padding: "10px" }}
                  />
                </div> */}

                {/* Notes/Message Field */}
                <div className="field-group" style={{ marginBottom: "10px" }}>
                  <textarea
                    name="message"
                    placeholder="Notes or Message"
                    rows="3"
                    className="form-control"
                    style={{ width: "100%", padding: "5px" }}
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  id="button"
                  className="subscribe-newsletter-btn"
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
