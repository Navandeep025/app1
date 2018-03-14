// requiring the needed packages
const React = require('react');
const ReactDOM = require('react-dom');
const {hashHistory, Route, Router} = require('react-router');
const NavBar = require('./components/js/NavBar');
const Login = require('./components/js/login');
const Service = require('./components/js/service');
import LandingPage from './components/js/landingPage.jsx';
import Request from './components/js/request.jsx';
import Cart from './components/js/mongodb.jsx';
const upload = require('./components/js/uploadCSV/uploadCSV.jsx');


const MainComp = React.createClass({
    render: function() {
        return (
            <div>
              <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Login}/>

    <Route path="/Cart" component={Cart}/>
    <Route component={MainComp}>
<Route path="/NavBar" component={LandingPage}/>
<Route path="/Service" component={Service}/>
<Route path="/Request" component={Request}/>
    </Route>
</Router>, document.getElementById('app'));
