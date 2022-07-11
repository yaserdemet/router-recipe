import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MealDetail = () => {
  const navigate = useNavigate()
  const {label} = useParams()




const {state} = useLocation()
const {data1} = state
console.log(data1)

  return (
    <div>
    {
      data1.map((item,index) => {
        return(
          <div key={index}>
            <h1>{item.label}</h1>
            <img src={item.image}  />
            <h2>{item.calories}</h2>
            <p>{item.source}</p>
          </div>
        )
      })
    }
    

    </div>
  )
}

export default MealDetail
