import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import './AppProfile.css'
import NavRec from '../components/NavRec'
import Footer from '../components/Footer';
function RecProfile(){
    return(
        <div>
            <NavRec/>
            <div className='AppPromain'>
                <br/><br/>
                <h2>My profile</h2>
                <br/>
            <form>
            <label>
                Company Name: &nbsp;
                <input type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                Company Email: &nbsp;
                <input type="email" name="email" />
            </label>
            <br/> <br/>
            <label>
                Company Phone Number: &nbsp;
                <input type="number" name="mobile" />
            </label>
            <br/> <br/>
            <input type="submit" value="Submit" />
            <br/> <br/>
            </form>
            </div>
            <Footer/>
        </div>
    )
};

export default RecProfile;