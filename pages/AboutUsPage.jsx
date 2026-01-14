import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import WhatWeOffer from "../components-home3/WhatWeOffer"
import SafeaAndGoodHandsimg1 from "../src/assets/home-2/SafeaAndGoodHands/home2-SafeaAndGoodHands.png"
import MainImg from "../src/assets/home-3/about-page/Why-DC-Care-img.png"
import { Link } from "react-router-dom"


const AboutUsPage = () => {
  const SafeaAndGoodHandsMainImg = SafeaAndGoodHandsimg1;
  const AboutDCCareImg = MainImg;
  return (
    <>
    <Home3Header />
    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        About us
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                        <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <WhatWeOffer />

   <section className="home2-AboutUsPage-sec ">
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
            <div className="home2-SafeaAndGoodHands-cont">
              <h3 className="home2-AboutUsPage-cont-tit">
              Your Pets are in Very <b>Safe & Good</b> Hands
              </h3>

              <p>Pawfect Strolls is a trusted, boutique pet care team dedicated to keeping your dog or cat comfortable at home. We specialize in reliable daily dog walks, drop-in visits, and overnight care with GPS updates, photo check-ins, and safety-first handling.</p>

              <ul className="home2-SafeaAndGoodHands-cont-small-card">
                  <li>
                    <h3>Our Vision</h3>
                    <p>Create happier, calmer pets by delivering stress-free routines and enrichment on every walk and visit.</p>
                    </li>
                  <li>
                    <h3>Our Mission</h3>
                    <p>Show up on time, communicate clearly, and tailor care to each pet’s needs so busy owners always have peace of mind.</p>
                  </li>
              </ul>

              <a href="#" className="home2-AboutUsPage-cont-btn">
              View Details
              </a>
            </div>
            </div>
            <div className="col-lg-5">
            <div className="home2-SafeaAndGoodHands-main-img">
               <img src={SafeaAndGoodHandsMainImg} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <section className="About-DC-Care-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="About-DC-Care-main-img">
                        <img src={AboutDCCareImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="About-DC-Care-cont-wrap">
                        <span className="About-DC-Care-cont-mini-tit-1">
                         
                        Why <b>Pawfect Strolls</b>
                        </span>

                        <h3 className="About-DC-Care-cont-main-tit-1">
                        Pet care built on trust, routine, and happy tails.
                        </h3>

                        <p>Our walkers and sitters are trained in pet safety, insured, and bonded. We follow your feeding, medication, and training notes to the letter, send real-time updates, and adjust each visit to your pet’s age, energy level, and comfort.</p>

                        <div className="banner-btn-wraper">
                        <a href="#" className="primary-btn">Our Service</a>
                        <a href="#" className="secondary-btn" >About Us</a>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <Home3Footer />
    </>
  )
}

export default AboutUsPage
