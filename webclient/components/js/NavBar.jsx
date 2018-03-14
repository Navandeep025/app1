import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
const {Link} = require('react-router');
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import LandingPage from './landingPage.jsx';

class MenuExampleContentProp extends Component {

  constructor() {
    super();
    this.state = {
    }

  }
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  handleOut() {
    hashHistory.push('/NavBar')
  }
  handleLogOut() {
    cookies.remove('username');
    cookies.remove('usertype');
    hashHistory.push('/');
  }
  handleRequest() {
    hashHistory.push('/Request')
    $.ajax({
      url: "http://10.142.207.15:8080/redmine/issues.json?key=b7e7bfe91e3258ef71ff3cea2ba4d747b1c05e5c",
      type: 'GET',
      success: function(data) {
        // console.log('success', data);
      }.bind(this),
      error: function(err) {
        console.log('error occurred on AJAX', err);
      }.bind(this)
    });
  }
  handlemongo(){
      hashHistory.push('/Cart');
  }
  render() {
    const {activeItem} = this.state
    let MenuExampleContentProp;
    if (cookies.get('usertype') == "User" || cookies.get('usertype') == "Pair") {
  MenuExampleContentProp=(
    <div>
      <Menu className='ui top  fixed borderless menu' size='massive' >
        <Menu.Item size='massive' style={{backgroundColor:'white'}}>
          <img src='../image/Wipro.jpg' onClick={this.handleOut}/>
        </Menu.Item>
        <Menu.Item position='center' content='DevOps  Engineering  as  a  Service' onClick={this.handleOut} style={{fontStyle:'Arial', fontSize:'115%'}}/>
        <Menu.Menu position='right' style={{fontStyle:'Arial', fontSize:'90%'}}>
          <Menu.Item name='Request' icon={{ name: 'help'}} active={activeItem === 'Request'} position='right' onClick={this.handleRequest}/>
          <Menu.Item name='profile' icon={{ name: 'user'}} active={activeItem === 'profile'} position='right' onClick={this.handleItemClick}/>
          <Menu.Item name='Cart' icon={{ name: 'cart'}} active={activeItem === 'Cart'} position='right' onClick={this.handlemongo} />
          <Menu.Item  icon ={{ name:'sign out'}} name='logout' active={activeItem === 'logout'} position='right' onClick ={this.handleLogOut}/>
          </Menu.Menu>

        </Menu>
      </div>
  );
}
else{
    hashHistory.push('/');
}

    return (
      <div>
            {MenuExampleContentProp}
          </div>
      );
    }
  }
  module.exports = MenuExampleContentProp;
