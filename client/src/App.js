import React, {Component} from  'react';
import {Link, Route, Routes} from 'react-router-dom';
import Axios from 'axios'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hello from './pages/hello';
import HomeApp from './pages/HomeApp';
import HomeRec from './pages/HomeRec';
import AppProfile from './pages/AppProfile';
import RecProfile from './pages/RecProfile';
import PostJob from "./pages/PostJob";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AppJob from './pages/AppJob'
function App() {
  return(
    <div>
      
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Hello' element={<Hello/>}/>
        <Route path='/HomeApp' element={<HomeApp/>}/>
        <Route path='/HomeRec' element={<HomeRec/>}/>
        <Route path='/AppProfile' element={<AppProfile/>}/>
        <Route path='/RecProfile' element={<RecProfile/>}/>
        <Route path='/PostJob' element={<PostJob/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/update/:id" element={<EditUser/>}/>
        <Route path='AppJob' element={<AppJob/>}/>
      </Routes>
    </div>
  );
};

export default App;
