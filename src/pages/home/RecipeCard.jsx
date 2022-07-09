import React from 'react'
import { Main } from './style'

const RecipeCard = ({image, label, source}) => {
  return (
    <Main>
        <img src={image} alt={label} />
        <h3>{label}</h3>
        <p>{source}</p>
        
    </Main>
  )
}

export default RecipeCard