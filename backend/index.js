import express from "express"
import mysql from "mysql2"
import cors from "cors"
// const mysql = require('mysql2');

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: 'tnguyenswe',
    password: "password1",
    database: "RateMyNFT"

})

app.use(express.json());
app.use(cors());

//You can visit localhost:8800 and see this
app.get("/", (req, res) => {
    res.json("Hello this is the backend")
})

//Query DB for all reviews
app.get("/reviews", (req,res) => {
    const query = "SELECT * FROM Reviews"

    db.query(query, (err,data) => {
        if(err) {return res.json(err)}
        return res.json(data)
    })
})

app.get('/reviews/:contractAddress', (req, res) => {
    const contractAddress = req.params.contractAddress;
  
    const sql = 'SELECT * FROM Reviews WHERE contractAddress = ?';
    db.query(sql, [contractAddress], (err, results) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.json(results);
    });
  });

app.post("/reviews", (req, res) => {
    const {rating, body, author, contractAddress, projectName} = req.body;
    console.log(req.body);

    const query = "INSERT INTO Reviews (`rating`,`body`,`author`, `contractAddress`, `projectName`) VALUES (?, ?, ?, ?, ?)"
    const values = [rating, body, author, contractAddress, projectName]

    db.query(query, values, (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json("Review has been created successfully.");
    })
})

//Ideally, this should be a post, but since we aren't sending it any data we just made it a get.
app.get("/createBoilerplateData", (req, res) => {

    const query = "INSERT INTO Reviews (`rating`,`body`,`author`, `contractAddress`, `projectName`) VALUES (?, ?, ?, ?, ?)"
    const values = [5, "Here is a detailed review of this project",
    "elonmusk", "0xed5af388653567af2f388e6224dc7c4b3241c544", "Azuki"]

    db.query(query, values, (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json("Review has been created successfully.");
    })
})

// Define a route to delete all entries from the Reviews table
app.get('/deleteAllReviews', (req, res) => {
    const sql = 'DELETE FROM Reviews';
  
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.send('All entries in the Reviews table have been deleted.');
    });
  });

app.listen(8800, () => {
    console.log("Connected to backend!")
})