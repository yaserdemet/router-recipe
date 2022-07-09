import React from 'react'
import Div from './navbarStyle'
import  image  from "../../assets/images.png"
import image2 from "../../assets/images (1).png"
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
  <Div>
        <img src={image} alt="" />

        <NavLink style={({ isActive }) => ({ color: isActive && '#859445' })}  to="/About">About Us</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive && '#859445' })} to="/Home">Home</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive && '#859445' })} to="/">Logout</NavLink>

        <img src={image2} alt="" />

    </Div>
  )
}

export default Navbar