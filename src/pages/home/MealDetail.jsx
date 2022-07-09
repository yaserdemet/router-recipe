import React from "react";
import { useNavigate } from "react-router";
import { useParams , useLocation} from "react-router";


const MealDetail = () => {
  const navigate = useNavigate();
  const {label} = useParams();
  const {state} = useLocation()

 
  

  return <div>
     <h1>{label}</h1>
  </div>;
};

export default MealDetail;
