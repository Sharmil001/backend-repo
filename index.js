const express = require("express");
const dbConnection = require("./DbConnection/db.connection.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);


// dbConnection
dbConnection();
