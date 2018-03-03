var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);

  });

  app.get("../routing/friends?", function(req, res)  {
    var chosen = req.params.friends;

  });

  app.post("/api/clear", function(req, res) {
   req.body

   friends = [];

   console.log(friends);

 });

  app.post("/api/friends", function(req, res){
    //this prints off the userData
    console.log("req.body is ", JSON.stringify(req.body))
    //this prints off the userData score
    console.log("the list is" + JSON.stringify(req.body["scores[]"]))
    //this prints off the first value of the userData
    console.log("the list is the first number in userData" + JSON.stringify(req.body["scores[]"][0]))
     //this prints off the friend list
     console.log("this is your friends list ", JSON.stringify(friends));
     //this printed off the first friends info
     console.log("this is your first name of the friends list ", JSON.stringify(friends[0]));
     //this printed off the score of the first friend
     console.log("this is the first friends score ", JSON.stringify(friends[0].scores));
     console.log("this is the first value in the frist friends scores", JSON.stringify(friends[0].scores[0]));
      //respresentations of first value of both friend and user

      //every addition of parseInt to the two numbers produces NaN
      var mario = JSON.stringify(friends[0].scores[0]);
      var me = JSON.stringify(req.body["scores[]"][0]);
   
   

     console.log("Adding both first scores", parseInt(mario + me));



}); 

};

