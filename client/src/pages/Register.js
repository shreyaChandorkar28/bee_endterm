import React, {useState, useEffect} from 'react'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import Axios from 'axios'
import props from 'prop-types';
import logo from '../assets/logo.png'
import './Register.css'
import Login from './Login'
function Register(props){
    const [UsernameReg, setUsernameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");
    const [TypeReg, setTypeReg] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register', {
          username: UsernameReg,
          email: EmailReg,
          password: PasswordReg,
          type: TypeReg,
        }).then((response) => {
          console.log(response);
        });
      };
    return(
        <div className='main'>
            <img src={logo} alt="Logo"  className='imm'/>
        <div className='registrstion'>
        <h1>Registration</h1>
        <br/>
        <label>Username</label>
        <br/>
        <input type="text" 
        onChange = {(e) => {
          setUsernameReg(e.target.value);
        }} />
        <br/><br/>
        <label>Email</label>
        <br/>
        <input type="email" 
        onChange = {(e) => {
          setEmailReg(e.target.value);
        }} />
        <br/><br/>
        <label>Password</label>
        <br/>
        <input type="password"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }} />
        <br/><br/>
        <label>Type</label>
        <br/>
        <input type="text" 
        onChange = {(e) => {
          setTypeReg(e.target.value);
        }} />
        <br/> <br/>
        <button onClick={register} >Register</button> <br/><br/>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        <button className="link-btn"><Link to='/' style={{ textDecoration: 'none', color:'white'}}>Already have an account? Login here.</Link></button>
      </div>
      </div>
    );
};
export default Register;