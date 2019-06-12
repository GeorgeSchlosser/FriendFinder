// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware(body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});