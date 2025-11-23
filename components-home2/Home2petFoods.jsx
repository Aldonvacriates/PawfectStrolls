
import Img1 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit.png"
import Img2 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit1.png"
import Img3 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit2.png"
import Img4 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit3.png"


const Home2petFoods = () => {
   const petFoodImg = "https://placehold.co/229x214"

  return (
    <section className="home2-pet-food-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img home2-pet-food-img1">
                            <img src={petFoodImg} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img home2-pet-food-img2">
                            <img src={petFoodImg} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img home2-pet-food-img3">
                            <img src={petFoodImg} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img home2-pet-food-img4">
                            <img src={petFoodImg} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home2petFoods