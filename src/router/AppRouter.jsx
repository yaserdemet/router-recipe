import React from 'react'
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import About from '../pages/about/About';
import Footer1 from '../components/footer/Footer';

import Home from '../pages/home/Home';
import MealDetail from '../pages/home/MealDetail';
import Login from '../pages/login/Login';


const AppRouter = () => {
  return (

    <BrowserRouter>
    
   
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route  path="/Home" element={<Home/>}/>
            <Route  path="/About" element={<About/>}/>
            <Route path="/Home/:label" element={<MealDetail/>} />
            <Route path= "*" element={<Login/>}/>
        </Routes>
        <Footer1 />
        </BrowserRouter> 
      
     

  )
}

export default AppRouter