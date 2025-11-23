import Starts from "../src/assets/home-3/Home3TestimonialCard/stars.png";
import PrifleImg1 from "../src/assets/home-3/Home3TestimonialCard/card-profile-2.png";
import PrifleImg2 from "../src/assets/home-3/Home3TestimonialCard/card-profile-1.png";
import PrifleImg3 from "../src/assets/home-3/Home3TestimonialCard/card-profile-3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  { img: PrifleImg1, name: "Freddie Deckow", role: "Lead Marketing Administrator" },
  { img: PrifleImg2, name: "Courtney Henry", role: "Pet Owner" },
  { img: PrifleImg3, name: "Cameron Williamson", role: "Pet Parent" },
  { img: PrifleImg1, name: "Jacob Jones", role: "Dog Trainer" },
  { img: PrifleImg2, name: "Eleanor Pena", role: "Pet Lover" },
  { img: PrifleImg3, name: "Devon Lane", role: "Grooming Client" },
];

const Home3Testimonial = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <>
    <section className="Home3-Testimonial-sec">

    <div className="home3-Testimonial-tit-wraper">
            <h3 className="home3-Testimonial-mini-tit home3-Testimonial-main-tit">Customers   <b> Words</b></h3>
    </div>

        <div className="container">
            <div className="row">
                <div className="Home3-Testimonial-swiper-wraper">
                <Swiper
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination , Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="Home3-Testimonial-sec-card">
              <div className="Home3-Testimonial-card-tit">
              Testimonial
              </div>
              <div className="Home3-Testimonial-card-rating">
              <img src={Starts} alt="5 star rating" />
              </div>

              <div className="Home3-Testimonial-card-profile">
                  <img src={testimonial.img} alt={`${testimonial.name} profile`} />
              </div>

              <h4 className="Home3-Testimonial-profile-name">
              {testimonial.name}
              </h4>

              <span className="Home3-Testimonial-profile">
              {testimonial.role}
              </span>

              <p>
              Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Testimonial
