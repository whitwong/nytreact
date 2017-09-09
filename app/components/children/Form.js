// Dependencies
var React = require("react");

// Create Form component
var Form = React.createClass({
	getInitialState: function(){
		return {term: "", startDate: "", endDate: ""};
	},
	handleChange: function(event){
		var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
	},
	handleSubmit: function(event){
		event.preventDefault();
		this.props.setTerm(this.state.term, this.state.startDate, this.state.endDate);
		this.setState({term: "", startDate: "", endDate: ""});
	},
	render: function(){
		return (
      <div className="col-sm-12">
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
          </div>
          <div className="panel-body">

            {/*Form to handle inputs*/}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              	<h5 className="">
              		<strong>Search Topic</strong>
              	</h5>
              	<input
              		value={this.state.term}
              		type="text"
              		className="form-control"
              		id="term"
              		onChange={this.handleChange}
              		required
              	/>
              	<br />
              </div>

              <div className="form-group">
              	<h5 className="">
              		<strong>Start Year</strong>
              	</h5>
              	<input
              		value={this.state.startDate}
              		type="text"
              		className="form-control"
              		id="startDate"
              		onChange={this.handleChange}
                  required
              	/>
              	<br />
              </div>

              <div className="form-group">
              	<h5 className="">
              		<strong>End Year</strong>
              	</h5>
              	<input
              		value={this.state.endDate}
              		type="text"
              		className="form-control"
              		id="endDate"
              		onChange={this.handleChange}
                  required
              	/>
              	<br />
              </div>
							
							<button className="btn btn-primary" type="submit">Submit</button>
              
            </form>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = Form;