// Dependencies
var axios = require("axios");

// NTY API Key
var apiKey = "06c9bd29d9184d37922e53f8dd16d71d"

// Create helper function to make API query
var helper = {
	runQuery: function(articleSearch, searchStart, searchEnd) {
		console.log("articleSearch " + articleSearch);
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + articleSearch + "&begin_date=" + searchStart + "0101&end_date=" + searchEnd +"0101";
		return axios.get(queryURL).then(function(data){
			if (data) {
				return data.data.response.docs.slice(0,5);
			}
			return "";
		});
	},
	getSaved: function(){
		return axios.get("/api");
	},
	postSaved: function(headline, date, website){
		return axios.post("/api", {title: headline, date: date, url: website});
	},
	deleteSaved: function(articleId){
		return axios.delete("/api/"+articleId, {_id: articleId});
	}
};

module.exports = helper;