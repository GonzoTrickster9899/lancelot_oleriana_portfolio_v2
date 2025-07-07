import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './resume.pdf'; // Assuming you have a resume file in the img folder

const Services = () => {
    return (
        <div className="services">
            {/* Left Side */}
            <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                Lorem ipsum is simpley dummy text of printing of printing. Lorem
                <br />
                ipsum is simpley dummy text of printing of printing.
            </spane>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blue s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* Right Side */}
            <div className="cards">
                {/* First Card */}
                <div style={{left: '14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </div>
                {/* Second Card */}
                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"Html, Css, JavaScript, React, NodeJS"}
                    />
                </div>
                {/* Third Card */}
                <div style={{top: "19rem", left: "12rem"}}>
                    <Card
                        emoji = {Humble}
                        heading = {"UI/UX"}
                        detail = {"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div> 
            </div>
        </div>
    )
}

export default Services