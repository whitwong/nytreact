// Dependencies
var React = require("react");
var Form = require("./children/Form");
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var helpers = require("./utils/helpers");

// Create Main Component
var Main = React.createClass({
	getInitialState: function(){
		return {searchTerm: "", searchStart:"", searchEnd:"", results: [], saved: []};
	},
	componentDidMount: function(){
		// Initial render of page --> saved articles from MongoDB
		helpers.getSaved().then(function(response){
			if(response) {
				this.setState({saved: response.data});
			}
		}.bind(this));
	},
	componentDidUpdate: function(){
		// Run query for article search
		helpers.runQuery(this.state.searchTerm, this.state.searchStart, this.state.searchEnd).then(function(data){
			if (data !== this.state.results) {
				console.log("Article", data);
				this.setState({results: data});
			}
		}.bind(this));
	},
	setTerm: function(term, startDate, endDate){
		// set state based on return from Form child
		this.setState({searchTerm: term, searchStart: startDate, searchEnd: endDate});
		console.log("Search Term: " + term)
	},
	render: function(){
		return (
  	<div className="container">
	    <div className="jumbotron">
	      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search - React Style</strong></h1>
	    </div>

	    <div className="row">
	    	<Form setTerm={this.setTerm} />
	    </div>

	    <div className="row">
	    	<Results results={this.state.results} />
	    </div>

	    <div className="row">
	    	<Saved saved={this.state.saved} />
	    </div>

    </div>
		);
	}
});

module.exports = Main;