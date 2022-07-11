import React from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const MealDetail = () => {

  // const {label} = useParams()

const {state} = useLocation()
const {itemrecipe} = state
console.log(itemrecipe)



  return (
    <div>
   {
    <div>
    <h2>{itemrecipe.label}</h2>
    <p>Calories : {itemrecipe.calories.toFixed()}</p>
    <p>Health Label : {itemrecipe.healthLabels[0] }</p>
    <p>{itemrecipe.healthLabels[3] }</p>
    <p>Dish Type : {itemrecipe.dishType}</p>
    <p>{itemrecipe.ingredients.map((item) => {
      return <p>{item.text}</p>
    })}</p>
    
    </div>
   }

    </div>
  )
}
export default MealDetail
