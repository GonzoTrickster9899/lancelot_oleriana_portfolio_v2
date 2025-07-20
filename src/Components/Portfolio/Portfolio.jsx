import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Geotechnical from "../../img/geotechnical_calc.png";
import DWCL from "../../img/dwcl.png";
import Roompal from "../../img/roompal_portfolio.png";
import CTCED from "../../img/ctced.jpg"

import { themeContext } from "../../Context";
const Portfolio = () => {
    const theme = useContext(themeContext);
    //const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{/*color: darkMode?'white': ''*/}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Geotechnical} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={DWCL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Roompal} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CTCED} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;