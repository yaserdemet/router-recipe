import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card } from "./style";
import {Link, NavLink} from "react-router-dom";
import RecipeCard from "./RecipeCard";

const MealDetail = () => {
  const navigate = useNavigate();
  const { label } = useParams();

  const { state } = useLocation();
  const { itemrecipe } = state;
  console.log(itemrecipe);

  return (
   
    <Card>
      {
        
        <div className="cards">
          <div className="card" >
            <img src={itemrecipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{itemrecipe.label}</h5>
              <p className="card-text">{itemrecipe.calories.toFixed()}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{itemrecipe.healthLabels[0]}</li>
              <li className="list-group-item">{itemrecipe.dishType}</li>
              <li classNameName="list-group-item">
                {itemrecipe.healthLabels[3]}
              </li>
            </ul>
            <div classNameName="card-body">
              <button className="btn btn-dark mx-3" onClick={() => navigate(-1)} classNameName="card-link">
                Previous Page
              </button>
              <button className="btn btn-outline-dark mx-3" onClick={() => navigate("/About")} classNameName="card-link">
               About
              </button>
            </div>
          </div>
        </div>
      }
    </Card>
  );
};
export default MealDetail;
