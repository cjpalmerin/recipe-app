import React, { useEffect, useState} from 'react';
import './App.css';

require("dotenv").config()

function App() {

  useEffect(() => {
    console.log('Effect has been run')
  }, [])
  
  const [counter, setCounter] = useState(0)

  const exampleRequest = 
  `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`



  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
