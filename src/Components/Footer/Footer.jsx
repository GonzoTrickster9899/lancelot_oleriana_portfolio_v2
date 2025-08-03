import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Gmail from "@iconscout/react-unicons/icons/uil-envelope";

const Footer = () => {
    return (
        <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
            <a href="mailto:lancelotoleriana02@gmail.com" className="f-email">
                lancelotoleriana02@gmail.com
            </a>
            <span>
                09568757828
            </span>
            <div className="f-icons">
                {/*<a href="mailto:lancelotoleriana02@gmail.com"> 
                    <Gmail color="white" size={"3rem"} /> 
                </a>*/} 
                <a href="https://www.linkedin.com/in/lancelot-oleriana-a891a6204/" target="_blank" rel="noopener noreferrer">   
                    <Linkedin color="white" size={"3rem"} />
                </a>
                <a href="https://www.facebook.com/nightthinker99/"  target="_blank" rel="noopener noreferrer">   
                    <Facebook color="white" size={"3rem"} />
                </a>
                <a href="https://github.com/GonzoTrickster9899" target="_blank" rel="noopener noreferrer">
                    <Gitub color="white" size={"3rem"} />
                </a>
            </div>
            </div>
        </div>
    );
};

export default Footer;