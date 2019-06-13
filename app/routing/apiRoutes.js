// connect JSON
var friends = require("..data/friends.js");

// export the things
module.exports = function(app) {
    // GET route w/ url /api/friends, used to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends); 
    });
    
    // POST routes /api/friends, used to handle incoming survey results
    app.post("/api/friends", function(req, res) {
        // best match score
        var totalDifference = 0;
        // object to push results into to be displayed
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // take user survey results & parse(string => number)
        var userData = req.body;
        // set vars to store name & scores
        var userName = userData.name;
        var userScores = userData.scores;
        // ???
        var b = userScores.map(function(item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        // results
        console.log("name: " + userName);
        console.log("user score: " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Sum of user's score " + sum);
        console.log("Best match's friend difference " + bestMatch.friendDifference);
        
        
        // loop through all friend possibilities
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Difference: " + totalDifference);
            console.log("Best match's friend difference: " + bestMatch.friendDifference);
      
            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("-------------------------> " + totalDifference);
      
            // if statement that sums differences & picks best match
            if (totalDifference <= bestMatch.friendDifference) {
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
          }
          console.log(bestMatch);
          
          //save user's info
          friends.push(userData);
          console.log("New user added");
          console.log(userData);
          //return JSON w/ best match
          res.json(bestMatch);        
    });
};

// ***again, testing?