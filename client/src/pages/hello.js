import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import './Hello.css'
import Footer from '../components/Footer'
import HomeApp from './HomeApp';
import HomeRec from './HomeRec';
function Hello(){
    return(
        <div className='mainHel'>
            <div className='HelSub'>
            <h1>Login as a</h1>
            <br />
            <button className='btnHel'><Link to="/HomeRec" style={{ textDecoration: 'none', color:'white'}}>Recruiter</Link></button>
            <button className='btnHel'><Link to="/HomeApp" style={{ textDecoration: 'none', color:'white' }}>Applicant</Link></button>
            </div>
            <br/>
            <br/>
           <Footer/> 
        </div>
        
    );
};
export default Hello;