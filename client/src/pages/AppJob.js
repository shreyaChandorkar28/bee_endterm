import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import add from './AddUser'
import update from './EditUser'
import NavApp from '../components/NavApp'
import Footer from '../components/Footer'
const UserList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavApp/>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <br/><br/>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Company Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.position}</td>
                <td>{book.salary}</td>
                <td>{book.location}</td>
                <td>
                  <button>
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <br/> <br/>
    <Footer/>
    </div>
  );
};

export default UserList;