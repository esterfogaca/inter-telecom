import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Categories from './components/Categories';

import './App.css';
import Loading from './components/Loading';

const App = () => {
  const [ data, setData ] = useState(false);
  const [ categories, setCategories] = useState(false);
  const [ category, setCategory ] = useState(1);
  const [ page, setPage ] = useState(1);

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
    setData([]);
    setPage(1);
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${id}`);
    const json = await res.json();
    setData(json);
    setCategory(id);
  };

  const handleButtonClick = async () => {
    setPage(page + 1);
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`);
    const json = await res.json();
    setData([...data, ...json]);
  };

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