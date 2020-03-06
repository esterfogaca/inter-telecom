import React from 'react';
import './Card.css';

const Card = ({ image }) => {

    return (
        <div className="card" style={{ backgroundImage: `url(${image})` }} ></div>
    )
};

export default Card;