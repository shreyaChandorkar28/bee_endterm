const express = require("express");
const mysql = require("mysql");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "jobportal",
});

app.post('/register', (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    db.query(
        "INSERT INTO register (username,email,password,type) VALUES (?,?,?,? )",
        [username, email, password, type],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM register WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length>0) {
                res.send(result);
            }
            else{
                res.send({message: "Wrong email/password combination"});
            }
        }
    );
});
///////////////////////////////////////////////////
////////////////for crud on job portal ////////////

app.get("/", (req, res) => {
    res.json("hello");
  });
  
  app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`name`, `position`, `salary`, `location`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.position,
      req.body.salary,
      req.body.location,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE id = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `name`= ?, `position`= ?, `salary`= ?, `location`= ? WHERE id = ?";
  
    const values = [
      req.body.name,
      req.body.position,
      req.body.salary,
      req.body.location,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(3001, () => {
    console.log("running on 3001");
})