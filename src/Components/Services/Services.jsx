import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import Designer from '../../img/designer.png';
import Developer from '../../img/developer.png';
import IT from '../../img/it_pro.png';
//import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import Resume from './resume.pdf'; // Assuming you have a resume file in the img folder

const Services = () => {
    //context
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    //transition
    const transition = {
        duration: 2,
        type: "spring",
    };

    return (
        <div className="services">
            {/* Left Side */}
            <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                I'm a technology professional who handles the entire product  
                <br />
                lifecycle. I don't just build websites; I architect complete digital 
                <br />
                solutions that are beautiful, functional, and secure.
            </spane>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blue s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* Right Side */}
            <div className="cards">
                {/* First Card */}
                <motion.div
                    initial={{ left: "40rem" }}
                    whileInView={{ left: "25rem" }}
                    transition={transition}
                    style={{top: "-10rem"}}
                >
                    <Card
                        emoji = {Designer}
                        heading = {'UI/UX Designer'}
                        detail1 = {"Figma, Canva, Adobe Illustrator and Photoshop use for platform"}
                        detail2 = {"Wireframes, prototypes, information architecture and UX Research are particular jobs."}
                    />
                </motion.div>
                {/*<div style={{top: "-3rem", left: "18rem"}}></div>*/}
                {/* Second Card */}
                <motion.div
                    initial={{ left: "40rem"}}
                    whileInView={{ left: "5rem" }}
                    transition={transition}
                    style={{ top: "0rem "}}
                >
                    <Card
                        emoji = {Developer}
                        heading = {"Developer"}
                        detail1 = {"HTML, CSS, JavaScript, React, NodeJS, Python, Dart and PHP are languages"}
                        detail2 = {"Laravel, Bootstrap, React, CodeIgniter, Flutter, MySQL, MongoDB are frameworks and databases."}
                    />
                </motion.div>
                {/*<div style={{top: "-11rem", left: "3rem"}}></div>*/}
                {/* Third Card */}
                <motion.div
                    initial={{  left: "40rem" }}
                    whileInView={{ left: "22rem" }}
                    transition={transition}
                    style={{ top: "12rem" }}
                >
                    <Card
                        emoji = {IT}
                        heading = {"IT Professional"}
                        detail1 = {"Troubleshooting, data entry and management, software and hardware repair, cybersecurity, office and work documentations and IT supports are my main prefessions and skills"}
                    />
                </motion.div>
                {/*<div style={{top: "6rem", left: "32rem"}}></div>*/}
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div> 
            </div>
        </div>
    )
}

export default Services