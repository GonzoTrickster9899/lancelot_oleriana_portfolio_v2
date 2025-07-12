import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Work for All these</span>
                <span>Brands and Clients</span>
                <spane>
                    Lorem ipsum is simpley dummy text of printing of printing Lorem
                    <br />
                    ipsum is simply dummy text of the printing 
                    <br />
                    ipsum is simply dummy text of the printing 
                    <br />
                    Lorem ipsum is simpley dummy text
                </spane>
                <a href="{Resume}" download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{background: "#ABF1FF94" }}></div>
            </div>

            {/* Right Side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className='w-secCircle'>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* Background Circles */}
                <div class name="w-backCircle blueCircle"></div>
                <div class name="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works;