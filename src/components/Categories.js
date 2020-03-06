import React from 'react';
import './Categories.css';

const Categories = ({ list, handleClick }) => {
    return (
        <nav>
            <ul className="categories">
                { list.map( ({ id, name }) => (<li className="categories__item" key={id} onClick={() => handleClick(id)}>{name}</li>) ) }
            </ul>
        </nav>
    );
};

export default Categories;
