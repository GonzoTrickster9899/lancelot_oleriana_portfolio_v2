import React from 'react';
import './Card.css';

const Card = ({emoji, heading, detail1, detail2}) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail1}</span>
            <span>{detail2}</span>
            {/*<button className="c-button">Learn More</button>*/}
        </div>
    )
}

export default Card