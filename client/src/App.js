import React, { useEffect, useState } from 'react';
import './App.css';

require("dotenv").config()


function App() {

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const res = await fetch("https://api.edamam.com/search?q=chicken&app_id=" + process.env.REACT_APP_APP_ID + "&app_key=" + process.env.REACT_APP_APP_KEY)
    const data = await res.json();
    console.log(data);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
