import React from 'react';
import { ReactDOM } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import AppProfile from '../pages/AppProfile';
import HomeApp from '../pages/HomeApp'
import AppJob from '../pages/AppJob'
import './Navbar.css'
function Navbar(){
    const myStyle={
        width: '100px',
        height: '80px',
        // borderRadius: '10%'

    }
    return(
        <div className='na' style={{backgroundColor: "rgb(229,235,234)"}}>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/* <Link class="navbar-brand" to="/">
      <img src={logo} alt="My World" style={myStyle}/>
    </Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/HomeApp">Home</Link>
        <Link className="nav-link" to="/AppProfile">My Profile</Link>
        <Link className="nav-link" to="/AppJob">Jobs</Link>
        <Link className="nav-link" to="/Login">FAQ's</Link>
        <Link className="nav-link" to="/">Log Out</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;