var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req,res){
    console.log("get request");
    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });

});

// app.get("/", function(req, res){
//   res.send("hello World")
// });

app.listen(3000);
console.log("Server running on port 3000");
