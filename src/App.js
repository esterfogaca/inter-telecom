import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Categories from './components/Categories';

import './App.css';
import Loading from './components/Loading';

const App = () => {
  const [ data, setData ] = useState(false);
  const [ categories, setCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1');
      const json = await res.json();
      setData(json);
    };

    const fetchCategories = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/categories');
      const json = await res.json();
      setCategories(json);
    };

    fetchData();
    fetchCategories();
  }, []);

  const handleCategoryClick = async id => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${id}`);
    const json = await res.json();
    setData(json);
  };

  const handleButtonClick = () => alert('Olá!');

  if (data && categories) {
    return (
      <div className="app">
        <Categories list={categories} handleClick={handleCategoryClick} />
        <CardList src={data} handleClick={handleButtonClick} />
      </div>
    );   
  }

  return (
    <Loading fullscreen />
  )
     
};

export default App;