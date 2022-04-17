import { useState } from "react";
import axios from "axios";
import {userLogin} from "../Redux/Login/action"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate =useNavigate();
  const [formData,setformData]=useState(
    {
      "email": "",
      "password": "",
    }
  )
  const handleChange=(e)=>{
    const {id,value}=e.target;

   
    setformData({...formData,[id]:value})
  }
  const handleSubmit=(e)=>{
    setformData(JSON.stringify(formData))
    e.preventDefault();
    axios.post("https://apartment-masai.herokuapp.com/register",formData).then(alert("user created"));
    setformData({
      "email": "",
      "password": "",
    })
  }

  const [loginData,setloginData]=useState(
    {
      "email": "",
      "password": ""
    }

  )

  const loginChange=(e)=>{
    const {id,value}=e.target;
    setloginData({...loginData,[id]:value})
    
  }
  const handleLogin=(e)=>{
    e.preventDefault();
    setloginData(JSON.stringify(loginData))
    console.log(loginData);
    userLogin(loginData);
    axios.post("https://apartment-masai.herokuapp.com/login",loginData).then(({data})=>{alert(data.token)})
    navigate("/")
  }
  



  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>email</label>
        <input
          id="email"
          type="text"
          className="name"
          onChange={handleChange}
          required
        />
        <br />
        <label>password</label>
        <input
          id="password"
          type="text"
          className="password"
          onChange={handleChange}
          required
        />
        
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          id="email"
          className="name"
          onChange={loginChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          id="password"
          className="password"
          onChange={loginChange}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
