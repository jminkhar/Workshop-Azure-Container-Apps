const express = require("express");
const index = express.Router();
/*
const db = require("../config/db")
*/

index.get("/", (req, res) => {
  res.send({ message: "API v.1.0.0" });
});

inc1 = 0;
inc2 = 0;
index.get("/plaquage-ok/get", (req, res) => {
  /*db.query('SELECT * FROM plaquage_ok', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });*/
  let results = inc1;
  res.json(results);
});

index.post ("/plaquage-ok/add", (req,res) => {
  let postData = req.body;
 /* db.query('UPDATE plaquage_ok SET sum_plaquage_ok=sum_plaquage_ok+1 WHERE Id = 1' , postData,(error, results,fields) => {
      if (error) throw error;   
  });*/
  inc1 = inc1+1;
});

index.post ('/plaquage-ok/reset', (req,res) => {
  let postData = req.body;
  /*db.query('UPDATE plaquage_ok SET sum_plaquage_ok = 0 where id = 1' , postData,(error, results,fields) => {
      if (error) throw error;     
  });*/
  inc1=0;
});

index.get("/plaquage-ko/get", (req, res) => {
  /*db.query('SELECT * FROM plaquage_ko', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });*/
  let results = inc2;
  res.json(results);
});

index.post ("/plaquage-ko/add", (req,res) => {
  let postData = req.body;
  /*db.query('UPDATE plaquage_ko SET sum_plaquage_ko=sum_plaquage_ko+1 WHERE Id = 1' , postData,(error, results,fields) => {
      if (error) throw error;   
  });*/
  inc2=inc2+1;
});

index.post ('/plaquage-ko/reset', (req,res) => {
  let postData = req.body;
  /*db.query('UPDATE plaquage_ko SET sum_plaquage_ko = 0 where id = 1' , postData,(error, results,fields) => {
      if (error) throw error;     
  });*/
  inc2 = 0;
});

module.exports = index;








