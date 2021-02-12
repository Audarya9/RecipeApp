import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Recipe from './Recipe';

function App() {
  
  const APP_ID = "d01d9b59";
  const APP_KEY = "16571a9aaaee4b0e931446c6649d1b02";

  
  const [recipe,setRecipe] = useState([]);

  useEffect(()=>{
    getRecipe();
  },[]);

  const getRecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
  };


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipe.map(recipe =>{
        <Recipe/>
      })}
    </div>
  );
}

export default App;
