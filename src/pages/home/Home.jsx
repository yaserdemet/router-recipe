import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Div from "./style"
import RecipeCard from "./RecipeCard"
import { useState } from 'react'
import loading from "../../assets/loading.gif"
import {useEffect} from 'react'
import axios from 'axios'
// styled componentlerde tagları import et.


const Home = () => {
  const [data, setData] = useState([]);
  const [meal, setMeal] =useState('');
  const [query, setQuery] = useState('');
  const [icon, setIcon] = useState(false);

  const appId = "9df041a6"
  const apiKey = "77c7ceb1a4c40d69998fc15e99950338"
 
 
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${meal}`


 const getData = async () => {
  const {data} = await axios.get(url)
  setData(data.hits)
  console.log(data.hits)
 }
  
 const handleSubmit = (e) => {
  e.preventDefault()
  setIcon(true)
  setTimeout(() => {
    setIcon(false)
    getData()
  }, 3000);


 }



  return (
    <div>
      <Navbar />
     <Div>
      <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        name="query" 
        id="query" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
       
        />
        <select 
        name="meal" 
        id="meal" 
        onChange={(e)=>setMeal(e.target.value)}
       
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
        <button>Search</button>

      </form>
      
      </Div>

      <div className="container">
        { !icon ? 
          (data.map((item, index) => {
            const {label, source,image} = item.recipe
            return (
              <RecipeCard key={index} image={image} label={label} source={source} />
            )
              
          })
        ) : <img src={loading} alt="loading" />}
    </div>
     
    </div>
  )
}

export default Home