import React from 'react'
import Div from "./style"
import { useState } from 'react'
import { useEffect } from 'react'
import  {useNavigate} from 'react-router-dom'
import Modal from '../../components/modul/Modal'




const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
    email: '',
    password: ''
})

const [modal, setModal] = useState(false)

const handleSubmit = (e) => {
    if(!user.email || !user.password){
      
        return false;
    }
   
    e.preventDefault()
    // console.log(user);
    let x =   localStorage.setItem("user" , JSON.stringify(user))
    console.log(x);
    navigate("Home")

  
}

const handleChange = (e) => {
    setUser({
        ...user, [e.target.name]: e.target.value
    })
    

}

  return (
  
   
    <Div>


         <form onSubmit={handleSubmit}>
   
            <div>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={handleChange} name="email" className="form-control" value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={handleChange} name="password"  type="password" value={user.password} className="form-control" id="exampleInputPassword1"/>
          </div>
          
          <button type="submit" onClick={() => setModal(!modal)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-modal">Submit</button>
        </form>
      




   
</Div>
  )
}

export default Login