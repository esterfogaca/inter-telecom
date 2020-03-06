import React from 'react';
import './CardList.css';

import Button from './Button';
import Loading from './Loading';

import Card from './Card';

const CardList = ({ src, handleClick }) => {
    if (src.length > 1) {
        return (
            <div className="cardlist">
                <div className="cards">
                    { src.map( ({ url }, index) => (<Card image={url} key={index} />) ) }
                </div>
                <Button handleClick={handleClick}>Load more cats!</Button>
            </div>
        );
    }

    return (<Loading/>);
};

export default CardList;