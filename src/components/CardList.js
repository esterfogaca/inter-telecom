import React from 'react';
import './CardList.css';

import Button from './Button';

import Card from './Card';

const CardList = ({ src, handleClick }) => {
    return (
        <div className="cardlist">
            <div className="cards">
                { src.map( ({ id, url }) => (<Card image={url} key={id} />) ) }
            </div>
            <Button handleClick={handleClick}>Load more cats!</Button>
        </div>
    );
};

export default CardList;