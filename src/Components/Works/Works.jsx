import React, { useContext } from "react";
import "./Works.css";

import Facebook from "../../img/Facebook.png";

import Mentee from "../../img/mentee.png";
import Roompal from "../../img/roompal.png";
import AcrossMedia from "../../img/acrossmedia.png";
import BicolUniversity from "../../img/bicoluniversity.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  //const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{/* color: darkMode ? "white" : "" */}}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            I help businesses of all sizes achieve their goals through strategic design, robust development, 
            <br />
            and reliable IT solutions. The brands below represent my commitment to delivering 
            <br />
            tangible value and exceptional work.
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Mentee} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Roompal} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={AcrossMedia} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={BicolUniversity} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;