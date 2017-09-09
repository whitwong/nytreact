// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article");

// App Setup
var app = express();
var PORT = process.env.PORT || 3000;

// Logging (Morgan) and Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("public"));

// -------------------------------------------------
// MongoDB Configuration
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err){
	console.log("Mongoose Error: ", err);
});

db.once("open", function(){
	console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// Express routes for MongoDB data
app.get("/", function(req, res){
	res.sendFil(__dirname + "/public/index.html");
});
// GET Route
app.get("/api", function(req, res){
	Article.find({}).exec(function(err, doc){
			if(err) {
				console.log(err);
			}
			else {
				res.send(doc);
			}
		});
});

// POST Route
app.post("/api", function(req, res){
	console.log("BODY: " + req.body.saved);

	Article.create({
		title: req.body.title,
		date: req.body.date,
		url: req.body.url
	}, function(err){
		if(err){
			console.log(err);
		}
		else {
			res.send("Saved Article");
		}
	});
});

// DELETE Route
app.delete("/api/:id", function(req, res){
	Article.remove({_id: req.params.id}, function(err){
		if (err){
			console.log(err);
		}
		else {
			console.log("DELETED!!")
		}
	})
})

// -------------------------------------------------
// Start server
app.listen(PORT, function(){
	console.log("Application running on port " + PORT);
});