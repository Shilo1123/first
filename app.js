const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: "test"
});
connection.connect((err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("connected to the database");
  }
})



const express = require("express")
const app = express()



app.listen(3000, (err)=> {
  if (err) {
      console.log(err);
  } else {
      console.log("server is up and listening on port 3000");
    }
})