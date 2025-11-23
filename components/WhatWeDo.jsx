import Img1 from "../src/assets/home/what-we-do/what-we-do-img1.png"
import Img2 from "../src/assets/home/what-we-do/what-we-do-img2.png"
import Img3 from "../src/assets/home/what-we-do/what-we-do-img3.png"


const WhatWeDo = () => {

  return (
    <>
      <section className="what-we-do-sec">
        <div className="what-we-do-tit-wraper">
          <h3 className="what-we-do-main-tit">
            What We <b>Do</b>.
          </h3>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="what-we-do-cards">
                <div className="what-we-do-card-img">
                  <a href="#">
                    <img src={Img1} alt="" />
                  </a>
                </div>
                <a href="#" className="what-we-do-card-tit">
                  Daily Walks & Exercise
                </a>

                <p>
                  We provide safe, structured walks tailored to your dog's
                  energy level. Whether they need a quick potty break or a full
                  adventure, our walks help reduce stress, burn energy, and keep
                  your pup healthy and happy.
                </p>

                <a href="#" className="abt-us-read-more-btn">
                  Read more
                </a>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="what-we-do-cards">
                <div className="what-we-do-card-img animate__animated animate__bounce">
                  <a href="#">
                    <img src={Img2} alt="" />
                  </a>
                </div>

                <a href="#" className="what-we-do-card-tit">
                  Potty Breaks & Check-Ins
                </a>

                <p>
                  Perfect for puppies, seniors, or busy days. We stop by to let
                  your dog out, refresh water, give them attention, and make
                  sure they're comfortable. A quick check-in that brings peace
                  of mind and keeps your pet's routine consistent.
                </p>

                <a href="#" className="abt-us-read-more-btn">
                  Read more
                </a>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="what-we-do-cards">
                <div className="what-we-do-card-img">
                  <a href="#">
                    <img src={Img3} alt="" />
                  </a>
                </div>

                <a href="#" className="what-we-do-card-tit">
                  In-Home Dog Sitting
                </a>

                <p>
                  When you're away, we stay with your pup in the comfort of
                  their own home. We keep their routine consistent with feeding,
                  walks, playtime, and lots of affection. Your dog enjoys a
                  stress-free environment while you get peace of mind knowing
                  they're cared for like family.
                </p>

                <a href="#" className="abt-us-read-more-btn">
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

export default WhatWeDo
