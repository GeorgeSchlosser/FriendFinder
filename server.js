// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware(body-parser)
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Serve static files w/ Express (https://expressjs.com/en/starter/static-files.html)
app.use(express.static(path.join(__dirname, "./app/public")));
// app.use(express.static("app/public"));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});