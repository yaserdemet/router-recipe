import React from "react";
import { Main } from "./style";
import Div from "./style";
import "../../App.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';


const RecipeCard = ({ image, label, source , itemrecipe , data1}) => {
  console.log(data1);
 

  const navigate = useNavigate();
  return (
    
      <Main>
        <div className="cart">
          <img src={image} alt={label} />
        </div>
        <h3>{label}</h3>
       <button onClick={() => navigate(`/Home/${label}` ,{state : {itemrecipe}}) } className="btn btn-success px-4 mx-3">MORE INFO</button>
      </Main>
    
  );
};

export default RecipeCard;
