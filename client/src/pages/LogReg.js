import React, {useState, useEffect} from 'react'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import Axios from 'axios'
import Login from "./Login";
import Register from "./Register";
function LogReg() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  // const [UsernameReg, setUsernameReg] = useState("");
  // const [EmailReg, setEmailReg] = useState("");
  // const [PasswordReg, setPasswordReg] = useState("");
  // const [TypeReg, setTypeReg] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // const register = () => {
  //   Axios.post('http://localhost:3001/register', {
  //     username: UsernameReg,
  //     email: EmailReg,
  //     password: PasswordReg,
  //     type: TypeReg,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  // const login = () => {
  //   Axios.post('http://localhost:3001/login', {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if(response.data.message){
  //       setLoginStatus(response.data.message);
  //     }
  //     else{
  //       setLoginStatus(response.data[0].email);
  //     }
  //   });
  // };

  // return (
  //   <div className="App">
  //     <div className='registrstion'>
  //       <h1>Registration</h1>
  //       <label>Username</label>
  //       <input type="text" 
  //       onChange = {(e) => {
  //         setUsernameReg(e.target.value);
  //       }} />
  //       <label>Email</label>
  //       <input type="email" 
  //       onChange = {(e) => {
  //         setEmailReg(e.target.value);
  //       }} />
  //       <label>Password</label>
  //       <input type="password"
  //       onChange={(e) => {
  //         setPasswordReg(e.target.value);
  //       }} />
  //       <label>Type</label>
  //       <input type="text" 
  //       onChange = {(e) => {
  //         setTypeReg(e.target.value);
  //       }} />
  //       <button onClick={register}>Register</button>
  //     </div>
  //     <div className='login'>
  //       <h1> Login</h1>
  //       <input type="email" placeholder="Your email..." 
  //       onChange = {(e) => {
  //         setEmail(e.target.value);
  //       }}/>
  //       <input type="password" placeholder="Your password..." 
  //       onChange = {(e) => {
  //         setPassword(e.target.value);
  //       }}/>
  //       <button onClick={login}>Login</button>
  //     </div>
  //     <h1>{loginStatus}</h1>
  //   </div>
  // );
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default LogReg;
