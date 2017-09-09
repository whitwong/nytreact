// Dependencies
var React = require("react");
var router = require("react-router");
var Route = router.Route; 		//Display individual routes
var Router = router.Router;		//Contains all Routes
var hashHistory = router.hashHistory;		//Handles client-side routing without a server
var IndexRoute = router.IndexRoute;			//Default route

// Variables for Components
var Main = require("../components/Main");
var Form = require("../components/children/Form");
var Results = require("../components/children/Results");
var Saved = require("../components/children/Saved");

// Export Routes for app.js to use
module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="form" component={Form} />
			<Route path="results" component={Results} />
			<Route path="saved" component={Saved} />
			<IndexRoute component={Form} />
		</Route>
	</Router>
);