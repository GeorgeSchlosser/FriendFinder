// Dependencies
var path = require("path");

module.exports = function(app){
    //GET Route to /survey that displays the survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });

    //Default, catch-all route that leads to home.html
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};

// ***What's the best way to check this after writing?