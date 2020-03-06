import React from 'react';
import './CardList.css';

import Card from './Card';

const CardList = ({ src }) => {
    return (
        <div className="cardlist">
            { src.map( ({ id, url }) => (<Card image={url} key={id} />) ) }
        </div>
    );
};

export default CardList;