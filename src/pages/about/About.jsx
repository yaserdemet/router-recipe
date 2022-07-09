import React from 'react'
import Main from './style'
import x from "../../assets/BR-Chef-rev.jpg"
import person from "../../assets/Devin-web-rev.jpg"
import person1 from "../../assets/Julia-web-rev.jpg"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Location from '../../components/header/Location'




const About = () => {
  return (
    <div>
   <Navbar />
   <Main>
<div className='foto'>
<div className="card">
  <img src={x} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card">
  <img src={person} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card">
  <img src={person1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
   
   
   
  
    
   <div className='iframe container'>
    <div className='cardx'>
    <Header  />
    <Location />
    </div>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13642.377144320042!2d12.5922066851333!3d44.0429538089975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc31898c2a0c9%3A0x4ee456c557ef03cb!2sDalla%20Lella!5e0!3m2!1str!2str!4v1657320622032!5m2!1str!2str" width="600" height="590"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


   
   </div>
   </Main>
   </div>
  )
}

export default About