import React from 'react'
import Footer1 from './style'
import image1 from "../../assets/tchotel_2021_LL.png"
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {HiInformationCircle } from 'react-icons/hi'
import {FaCopyright} from 'react-icons/fa'



const Footer = () => {
  return (
  <Footer1 >  

        <p> <FaCopyright/> {new Date().getFullYear()} Copyright  All Rights Reserved </p>
        
        <div className='icons'> 
        <BsInstagram  size={30} />
        <BsFacebook  size={30} />
        <HiInformationCircle  size={35} />
        </div>
       
        
   


  </Footer1>
  )
}

export default Footer