import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn (){
    const [name,setname] = useState()
    const [pass,setpass] = useState()
    const navigate = useNavigate()
   function submitForm(e){
     e.preventDefault()
     const userName = localStorage.getItem("userName")
     const password = localStorage.getItem("password")
      if(userName === name && pass === password){
        navigate('/productList')
      }
     console.log(userName,password)
    }
  return (
    <form  onSubmit={submitForm}>
  <div class="container mb-3">
    <h2>signIn Page</h2>
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="text" class="form-control" onChange={e=>{setname(e.target.value)}} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="container mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  onChange={e=>{setpass(e.target.value)}} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  )
}