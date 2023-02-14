import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import './AppProfile.css'
import NavApp from '../components/NavApp'
import Footer from '../components/Footer';
function AppProfile(){
    return(
        <div>
            <NavApp/>
            <div className='AppPromain'>
                <br/><br/>
                <h2>My profile</h2>
                <br/>
            <form>
            <label>
                First Name: &nbsp;
                <input type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                Last Name: &nbsp;
                <input type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                Gender: &nbsp;
                <input type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                Email: &nbsp;
                <input type="email" name="email" />
            </label>
            <br/> <br/>
            <label>
                Mobile: &nbsp;
                <input type="number" name="mobile" />
            </label>
            <br/> <br/>
            <label>
            Experience: &nbsp;
            <input type="text" name="experience" />
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />
            <br/> <br/>
            </form>
            </div>
            <Footer/>
        </div>
    )
};

export default AppProfile;