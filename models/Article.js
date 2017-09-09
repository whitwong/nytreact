// Dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schema Setup
var ArticleSchema = new Schema({
	title: {
		type: String
	},
	date: {
		type: String
	},
	url: {
		type: String
	}
});

// Create new model and export
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;