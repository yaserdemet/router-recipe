import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Div from "./style";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import loading from "../../assets/loading.gif";
import { useEffect } from "react";
import axios from "axios";
import "../../App.css";
// styled componentlerde tagları import et.

const Home = () => {
  const style = { width: "400px", margin: "1rem auto" };
  //? gifin variable styleı ile style objesini verdik.

  const [data, setData] = useState([]);
  const [meal, setMeal] = useState("");
  const [query, setQuery] = useState("");
  const [icon, setIcon] = useState(false);

  const appId = "9df041a6";
  const apiKey = "77c7ceb1a4c40d69998fc15e99950338";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${meal}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    setData(data.hits);
    console.log(data.hits);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIcon(true);
    setTimeout(() => {
      setIcon(false);
      getData();
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <Div>
        <form onSubmit={handleSubmit}>
          <div>
          <input
          
          class="form-control"
          placeholder="Select One"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
          </div>
          
          <div>
          <select
            // style={{ display: "inline" }}
            className="form-select"
            id="inputGroupSelect01"
            name="meal"
            onChange={(e) => setMeal(e.target.value)}
          >
            <option defaultValue={"Choose One"}>Choose One</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
          </div>
          <button
            // style={{ display: "inline" }}
            className="btn btn-success px-4 mx-3"
          >
            Search
          </button>
        </form>
      </Div>

      <div className="rot">
        {!icon ? (
          data.map((item, index) => {
          
            const { label, source, image } = item.recipe;
         
            return (
            
              <RecipeCard
                key={index}
                image={image}
                label={label}
                source={source}
                itemRecipe={item.recipe}
                data1={data}

              />
           
            );
        })
        ) : (
          <img src={loading} style={style} alt="loading" className="slugg" />
        )}
      </div>
    </div>
  );
};

export default Home;
