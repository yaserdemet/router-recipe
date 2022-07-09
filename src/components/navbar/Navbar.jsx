import React from 'react'
import Div from './navbarStyle'
import  image  from "../../assets/images.png"
import image2 from "../../assets/images (1).png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <Div>
        <img src={image} alt="" />

        <Link to="/About">About Us</Link>
        <Link to="/Home">Home</Link>
        <Link to="/">Logout</Link>

        <img src={image2} alt="" />

    </Div>
  )
}

export default Navbar