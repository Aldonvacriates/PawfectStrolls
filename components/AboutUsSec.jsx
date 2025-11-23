import Img1 from "../src/assets/home/about-us/about-us-sec-mainimg.png"

const AboutUsSec = () => {
  const aboutUsSecMainImg = Img1;
  return (
    <>
      <section className="about-us-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-us-sec-main-img"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <img width="646" height="637" src={aboutUsSecMainImg} alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-us-sec-contant-home"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <span className="abt-us-mini-tit">About Us</span>
                <h2 className="abt-us-main-tit">
                  For your pet’s natural <b>life</b> & <b>care</b>
                </h2>

                <p>
                  At Pawfect Strolls, we bring care, comfort, and fun to every
                  visit. From daily walks to check-ins, we treat your pets like
                  family-focused on safety, trust, and happy tails. Whether
                  you're busy or traveling, we're here to make each day easier
                  and more joyful for your furry friends.
                </p>

                <ul className="abt-us-sec-check-box">
                  <li>Certified Groomers</li>
                  <li>Animal Lovers</li>
                  <li>14+ Years Experience</li>
                  <li>Loveable Sitters</li>
                </ul>

                <a className="abt-us-read-more-btn" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsSec