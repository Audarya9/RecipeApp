import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Recipe from './Recipe';
import style from './recipe.module.css';

function App() {
  
  const APP_ID = "d01d9b59";
  const APP_KEY = "16571a9aaaee4b0e931446c6649d1b02";

  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(()=>{
    getRecipe();
  },[query]);

  const getRecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
      {recipes.map(recipe =>(
        <Recipe
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
  ))}
      </div>
    </div>
  );
}

export default App;
