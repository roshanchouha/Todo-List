const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const connect = require('./Connect')
const app = express();
app.use(express.json());
app.use(cors());


app.post("", (req, resp) => {
   let data = req.body;
   connect.query("INSERT INTO todolist SET ?", data, (err, result) => {

      if (err) throw err;
      resp.send(result);

   })

});

app.get("", (req, resp) => {

   const query = `SELECT * FROM todolist WHERE category=${req.query.category} And UID=${req.query.UID} `
   connect.query(query, (error, result) => {
      if (error) throw error;
      if (result.length > 0)
         resp.send(result);
      else
         resp.send({ result: "No Task Found" });
   })
});
app.get("/all", (req, resp) => {

   const query = `SELECT * FROM todolist Where Time = ${req.query.date} And UID=${req.query.UID} `;
   connect.query(query, (error, result) => {
      if (error) throw error;
      if (result.length > 0)
         resp.send(result);
      else
         resp.send({ result: "No Task Found" });
   })
});

app.delete("/Delete/:id", (req, resp) => {
   let data = `DELETE FROM todolist WHERE TID=${req.params.id}`;
   connect.query(data, (error, result) => {
      if (error) throw error;
      resp.send(result);
   })
});


app.post("/user", (req, resp) => {
   let data = req.body;
   let email = req.body.email;
   let password = req.body.password;
   //var data = { 'email':"req.body.email", 'password':"req.body.password"};
   const sql = `SELECT * from user Where email= ?  && password = ?`;
   connect.query(sql, [email, password], (error, result) => {
      if (error) throw error;
      else {
         if (result.length > 0)
            resp.send(result);
         else {
            resp.send({result:"not found"});     
         }
       }
     })
   });

app.post("/signup", (req, resp) => {
      let data = req.body;
      connect.query("INSERT INTO user SET ?", data, (err, result) => {
   
         if (err) throw err;
         resp.send(result);
   
      })
   
   });

   app.listen(4500);