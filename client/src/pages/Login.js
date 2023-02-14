import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import props from 'prop-types';
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import './Login.css'
import logo from '../assets/logo.png'
import Register from './Register'
import Hello from './hello'
function Login(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else{
        setLoginStatus(response.data[0].email);
      }
    });
  };
    return(
        <div className='main'>
            <img src={logo} alt="Logo" className='imm'/>
            <div className='login'>
        <h1> Login</h1>
        <input type="email" required value = {email} placeholder="Your email..." 
        onChange = {(e) => {
          setEmail(e.target.value);
        }}/>
        <br/>
        <br/>
        <input type="password" required value = {password} placeholder="Your password..." 
        onChange = {(e) => {
          setPassword(e.target.value);
        }}/>
        <br/><br/>
        <button onClick={login}><Link to='/Hello' style={{ textDecoration: 'none', color:'white'}}>Login</Link></button>
        <br/><br/>
        {/* <Link to='/Register'><button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></Link> */}
        <button className="link-btn"><Link to='/Register' style={{ textDecoration: 'none', color:'white'}}>Don't have an account? Register here.</Link></button>
      </div>
      <h1>{loginStatus}</h1>
      
        </div>
    );
};
export default Login;