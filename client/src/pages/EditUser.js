import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PostJob from './PostJob';
import './AddUser.css'
import NavRec from '../components/NavRec'
import Footer from '../components/Footer'
const EditUser = () => {
  const [book, setBook] = useState({
    name: "",
    position: "",
    salary: "",
    location: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/books/${bookId}`, book);
      navigate("/PostJob");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <NavRec/>
      <br/><br/>
    <div className="form">
      <h1>Update the Job</h1>
      <br/>
      <label>
        Company Name: &nbsp;
      <input
        type="text"
        placeholder="Company Name"
        name="name"
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label>
        Position: &nbsp;
      <input
        type="text"
        placeholder="Position"
        name="position"
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label>
        Salary: &nbsp;
      <input
        type="text"
        placeholder="Salary"
        name="salary"
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label>
        Location: &nbsp;
      <input
        type="text"
        placeholder="Location"
        name="location"
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <button onClick={handleClick}>Update</button> &nbsp; &nbsp;
      {error && "Something went wrong!"}
    <button><Link to="/PostJob" style={{ color: "inherit", textDecoration: "none" }}>See all Jobs</Link></button>
    </div>
    <br/><br/>
    <Footer/>
    </div>
  );
};

export default EditUser;