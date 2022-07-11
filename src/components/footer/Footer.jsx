import React from 'react'
import Footer1 from './style'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {HiInformationCircle } from 'react-icons/hi'
import {FaCopyright} from 'react-icons/fa'



const Footer = () => {
  return (
  <Footer1 >  

        <p className='mx-5'> <FaCopyright/> {new Date().getFullYear()}  <span className='m-5'><small><strong>Copyright  All Rights Reserved</strong></small></span> </p>
        
        <div className='icons mx-5'> 
        <BsInstagram  size={30} />
        <BsFacebook  size={30} />
        <HiInformationCircle  size={35} />
        </div>
       
        
   


  </Footer1>
  )
}

export default Footer