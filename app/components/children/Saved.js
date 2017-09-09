// Dependencies
var React = require("react");
var helpers = require("../utils/helpers");

// Create Saved component
var Saved = React.createClass({
	handleClick: function(deleteItem, event) {
		event.preventDefault();
		console.log("delete!" + deleteItem._id);
		helpers.deleteSaved(deleteItem._id)
			.then(function(data){console.log(data)}.bind(this));
	}, 
	render: function(){
		return (
			<div className="col-sm-12">
				<br />
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"><strong><i className="fa fa-clone"></i>  Saved Articles</strong></h3>
					</div>
					<div className="panel-body">
						{/*Populate with data from MongoDB*/}
						{this.props.saved.map(function(savedInfo, i){
							return (
								<div key={i} className="well">
                  <h3>
                    <span className="label label-primary">{i+1}</span>
                    <strong>{savedInfo.title}</strong>
                  </h3>
                  <a href={savedInfo.url} target="_blank">{savedInfo.url}</a>
                  <p>Publish Date: {savedInfo.date}</p>
                  <button className="btn brn-primary btn-danger" id={savedInfo._id} onClick={this.handleClick.bind(this, savedInfo)}>Delete</button>
								</div>
							)
						}.bind(this))}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Saved;