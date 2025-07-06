import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I am</span>
                    <span>Lancelot</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producing the quality work.</span>
                </div>

                <button className="button i-button">Hire Me</button>

                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur' style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro