// Dependencies
var path = require("path");

// Routes
module.exports = function(app){
    //GET Route to /survey that displays the survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Default, catch-all route that leads to home.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

// ***What's the best way to check this after writing?