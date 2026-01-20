import Linkedin from "../src/assets/home/footer/linkedin.png"
import Twitter from "../src/assets/home/footer/twitter.svg"
import Facebook from "../src/assets/home/footer/facebook.png"
import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"
import footerContact1 from "../src/assets/home/footer/fot1.png"
import footerContact2 from "../src/assets/home/footer/fot2.png"
import footerContact3 from "../src/assets/home/footer/fot3.png"
import AppStoreBadge from "../src/assets/home/footer/app-store-badge.png"
import GooglePlayBadge from "../src/assets/home/footer/google-play-badge.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="footer-logo-ng-copy-rights-wrap">
                <div className="row justify-content-center">
                  <div className="col-sm-12">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={FooterLogo} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="terms-conditions">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Get Support</a>
                </li>
              </ul>

              <div className="contact-cont-and-social-media-links">
                <ul className="footer-contact-detail">
                  <li>
                    <div className="footer-contact-img">
                      <img src={footerContact1} alt="" />
                    </div>
                    <div className="footer-contact-cont">
                      <span>Contant Number</span>
                      <h4 className="footer-contact-name">
                        <a href="tel:435-241-3838">435-241-3838</a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="footer-contact-img">
                      <img src={footerContact2} alt="" />
                    </div>
                    <div className="footer-contact-cont">
                      <span>Support</span>
                      <h4 className="footer-contact-name">
                        <a href="mailto:hello@pawfectstrolls.shop">
                          hello@pawfectstrolls.com
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="footer-contact-img">
                      <img src={footerContact3} alt="" />
                    </div>
                    <div className="footer-contact-cont">
                      <span>Location</span>
                      <h4 className="footer-contact-name">
                        <a href="#">Park City, Utah 84098</a>
                      </h4>
                    </div>
                  </li>
                </ul>

                <div className="footer-cta-wrap">
                  <div className="footer-app-download">
                    {/* <br /> */}
                    <div className="footer-app-badges">
                      <a
                        href="https://apps.apple.com/us/app/time-to-pet/id957456517"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={AppStoreBadge}
                          alt="Download on the App Store"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.sweetss.timetopet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={GooglePlayBadge}
                          alt="Get it on Google Play"
                        />
                      </a>
                    </div>
                  </div>

                  {/* <div className="social-media-links">
                    <a href="#">
                      <img src={Linkedin} alt="" />
                    </a>
                    <a href="#">
                      <img src={Twitter} alt="" />
                    </a>
                    <a href="#">
                      <img src={Facebook} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copy-rights">
          &copy; {year} Pawfect Strolls LLC. All rights reserved. Design by{" "}
          <a
            href="https://www.aldowebsite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b> Aldo Website </b>
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer
