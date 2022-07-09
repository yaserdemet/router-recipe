import React from "react";
import { Main } from "./style";
import Div from "./style";
import "../../App.css";
import { useNavigate } from "react-router";

const RecipeCard = ({ image, label, source }) => {
  const navigate = useNavigate();
  return (
    
      <Main>
        <div className="cart">
          <img src={image} alt={label} />
        </div>
        <h3>{label}</h3>
       <button onClick={() => navigate(`/`)}  className="btn btn-success px-4 mx-3">MORE INFO</button>
      </Main>
    
  );
};

export default RecipeCard;
