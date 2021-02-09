import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const APP_ID = "d01d9b59";
  const APP_KEY = "16571a9aaaee4b0e931446c6649d1b02";

  const exmapleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter,setCounter] = useState(0);

  const [recipe,setRecipe] = useStates([]);

  useEffect(()=>{
    console.log('run hui gaba');
  },[counter]);

  const getRecipe = async ()=>{
    const response = await fetch(exmapleReq);
    const data = response.json();
    setReciepes(data.hits);
  };


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={()=>{setCounter(counter + 1)}}>{counter}</h1>
    </div>
  );
}

export default App;
