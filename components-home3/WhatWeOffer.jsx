import WhatWeOffer1 from "../src/assets/home-3/home3-What-We-Offer/What-We-Offer1.svg"
import WhatWeOffer2 from "../src/assets/home-3/home3-What-We-Offer/What-We-Offer2.svg"
import WhatWeOffer3 from "../src/assets/home-3/home3-What-We-Offer/What-We-Offer3.svg"
import WhatWeOffer4 from "../src/assets/home-3/home3-What-We-Offer/What-We-Offer4.svg"
import WhatWeOffer5 from "../src/assets/home-3/home3-What-We-Offer/What-We-Offer5.svg"

const WhatWeOffer = () => {
  return (
    <>
    <section className="home3-What-We-Offer-sec">
        <div className="container">
            <div className="home3-What-We-Offer-tit-wraper">

                <h3 className="home3-What-We-Offer-mini-tit home3-What-We-Offer-main-tit">What <b>We Offer</b></h3>

                <p>Pawfect Strolls provides reliable, safety-first pet care with GPS-tracked walks, photo updates, and routines tailored to every dog and cat we serve.</p>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer1} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        Daily Dog Walks
                        </h3>

                        <p>Structured neighborhood walks with GPS tracking, fresh water, and pace matched to your pup’s energy.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer2} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        Drop-In Visits
                        </h3>

                        <p>Midday potty breaks, feeding, meds, and playtime to keep pets relaxed between your morning and evening routines.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer3} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        Overnight Pet Sitting
                        </h3>

                        <p>Stay-in-your-home care that keeps pets on their routine with evening and morning walks, snuggles, and safety checks.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer4} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        Puppy & Senior Care
                        </h3>

                        <p>Gentle handling, shorter visits, and patient training reinforcement for young pups and aging companions.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer5} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        Cat Sitting & Litter Care
                        </h3>

                        <p>Feeding, litter scooping, meds, and playtime to keep cats content and routines uninterrupted.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="home3-What-We-Offer-card">
                        <div className="home3-What-We-Offer-card-icon">
                            <img src={WhatWeOffer1} alt="" />
                        </div>
                        <h3 className="home3-What-We-Offer-card-tit">
                        GPS Updates & Photos
                        </h3>

                        <p>Real-time GPS routes, time stamps, and picture check-ins so you always know how your pet’s visit went.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhatWeOffer
