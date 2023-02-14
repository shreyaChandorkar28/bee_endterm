import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Route, Routes} from 'react-router-dom';
import Typewriter from "typewriter-effect";
import CardLogo from '../components/CardLogo'
import './HomeApp.css'
import NavRec from '../components/NavRec'
import Footer from '../components/Footer'
import Netflix from '../assets/netflix.png'
import Instagram from '../assets/instagram.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import FedEx from '../assets/fedex.png'
import Microsoft from '../assets/microsoft.png'
import Twitter from '../assets/twitter.png'
import Apple from '../assets/apple.png'
import Samsung from '../assets/samsung.png'
function HomeRec(){
    return(
        <div>
            <NavRec/>
            <div className='HAmain'>
                <div className="typ">
                <Typewriter
                onInit={(typewriter)=> {
                typewriter 
                .typeString("Find the Job that is perfect for YOU")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Achieve Your Dreams")
                .start();
                }}
                />
                </div>
                <br /> <br /> <br />
                <div className='HAbody'>
                    <h2>Top Employers</h2>
                    <br />
                    <div className='grid-container'>
                        <div className='grid-item'><img src={Netflix} alt="Logo" /></div>
                        <div className='grid-item'><img src={Instagram} alt="Logo" /></div>
                        <div className='grid-item'><img src={Google} alt="Logo" /></div>
                        <div className='grid-item'><img src={Microsoft} alt="Logo" /></div>
                        <div className='grid-item'><img src={FedEx} alt="Logo" /></div>
                        <div className='grid-item'><img src={Facebook} alt="Logo" /></div>
                        <div className='grid-item'><img src={Twitter} alt="Logo" /></div>
                        <div className='grid-item'><img src={Apple} alt="Logo" /></div>
                        <div className='grid-item'><img src={Samsung} alt="Logo" /></div>
                    </div>
                </div>
                <br/>  <br/>
                </div>
            <Footer/>
        </div>
    );
};
export default HomeRec;