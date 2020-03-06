import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';

import './App.css';

const App = () => {
  const [ data, setData ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <CardList src={data} />
    );   
  }

  return (
    <h2>LOADING...</h2>
  )
     
};

export default App;