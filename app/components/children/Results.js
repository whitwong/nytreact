// Dependencies
var React = require("react");
var helpers = require("../utils/helpers");

// Create Results component
var Results = React.createClass({
  handleClick: function(item, event){
    event.preventDefault();
    console.log("SUBMITTING!!!!");
    helpers.postSaved(item.headline.main, item.pub_date, item.web_url)
      .then(function(data){}.bind(this));
  },
	render: function(){
		return (
      <div className="col-sm-12">
        <br />

        <div className="panel panel-primary">
       
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-tasks"></i>   Results</strong></h3>
          </div>

          <div className="panel-body">
            {this.props.results.map(function(search, i){
              return (
                <div key={i} className="well">
                  <h3>
                    <span className="label label-primary">{i+1}</span>
                    <strong>{search.headline.main}</strong>
                  </h3>
                  <a href={search.web_url} target="_blank">{search.web_url}</a>
                  <p>Publish Date: {search.pub_date}</p>
                  <button className="btn brn-primary" onClick={this.handleClick.bind(this, search)}>Save Article</button>
                </div>
              );
            }.bind(this))}
          </div>

        </div>
      </div>
		);
	}
});

module.exports = Results;