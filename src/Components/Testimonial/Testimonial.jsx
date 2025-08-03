import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import Jedrick from "../../img/jedrickcolico.jpg";
import Noli from "../../img/nolideguzman.jpg";

//import profilePic1 from "../../img/profile1.jpg";
//import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Jedrick,
      review:
        "Regarding sa program project na nagawa mo po, I really liked your worked especially like terms of accuracy nung Calculator despite the technicalities since more on engineering related lahat ng involved sa solving. Mabilis din natatapos yung program each topic yet not sacrificing yung neatness ng UI and yun nga pag generate ng correct answer. Salamat ulit. Proven and test yung skills mo.",
    },
    {
      img: Noli,
      review:
        "First, I would take this opportunity to commend the programmer dahil nagawa yung program on time given na merong mga constraints like profession gaps na kailangan i-fill. To be honest, the calculator itself was exceptional like at first glance, and organized tingnan and also user friendly na din given na merong mga figures and table to know or have a hint on what to input on the specific boxes na kailangan i-supply for calculation. Overall, maganda yung output nung program based sa instructions na binigay.",
    },
    /*{
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },*/
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;