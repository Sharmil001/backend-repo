const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();


const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/LearnDB")
    .then(() => {
      app.listen(3001, () => {
        console.log("Listing on 3001..");
      });
    })
    .catch((err) => {
      console.log("Failed to connect DB", err);
    });
}

module.exports = dbConnection;