import React, {Component} from 'react';
import {Form, Checkbox, Button, Input} from 'semantic-ui-react';
const {Link} = require('react-router');
const {hashHistory} = require('react-router');
// import { Button, Checkbox, Form, Card,Input,Icon } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ReactToastr = require('react-toastr');
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
class MenuExampleContentProp extends Component {
  constructor() {
  super();
  this.state = {
    username:'',
    password:'',
    alertMsg:false
  };
  // this.LoginUser = this.LoginUser.bind(this);
    this.checkCredentials = this.checkCredentials.bind(this);
    this.redirectingToCorrectPage = this.redirectingToCorrectPage.bind(this);
    this.checkforPasswordMismatch = this.checkforPasswordMismatch.bind(this);
}
checkforPasswordMismatch() {
  //console.log("inside check for password mismatch alert");
  let context = this;
  this.refs.asd.warning(
    'Password mismatch',
    '', {
    timeOut: 3000,
    extendedTimeOut: 3000
  }
);
}
handleUserName = (e) => {
  this.setState({username: e.target.value});
  //console.log("username ",this.state.username);
}
handlePassword = (e) => {
  this.setState({password: e.target.value});
}
checkCredentials() {
  //console.log("checking credentials");
  if(this.state.username == "" || this.state.password == "") {
    return "nodata";
  } else if(this.state.checkDataFromDb) {
    return "invalid";
  }else{
    return "success";
  }
}
redirectingToCorrectPage(res){
    if(res == "mismatch" || res == "invalid_data"){
      //console.log('mismatch found');
      cookies.set('username', 'dummyUser');
      cookies.set('usertype', 'dummyType');
      hashHistory.push('/');
    }
    if(res == "password_mismatch"){
      //console.log('pwd mismatch found');
      this.setState({alertMsg:true});
    }
    if(res.usertype=='User' || res.usertype=='Pair'){
      cookies.set('username', res.username);
      cookies.set('usertype', res.usertype);
      cookies.set('loginStatus', true);
      hashHistory.push('/NavBar');
    }
    if(res.usertype=='Admin') {
      //console.log(res.userType,"shown here");
      hashHistory.push('/NavBar');
      cookies.set('username', res.username);
      cookies.set('usertype', res.usertype);
      cookies.set('loginStatus', true);
    }
  }
login() {
  // console.log("inside login  user");
  if(this.checkCredentials() == "nodata"){}else{
    // console.log("ajax calling");
    let context = this;
    $.ajax({
      url:"/users/login",
      type: 'POST',
      datatype: 'JSON',
      data:{username :this.state.username,password:this.state.password},
      success: function(res)
      {
        // console.log('inside success',res);
        if(res == 'password_mismatch'){
          context.checkforPasswordMismatch();
        }
        context.redirectingToCorrectPage(res);
        //  //console.log('cookie is', Cookie.load('username'));
      }.bind(this),
      error: function(err)
      {
      }.bind(this)
    });
  }
}
  render() {
        let loginPage;
        let alertMessages = "";
    if(cookies.get('userType') == "User" || cookies.get('userType') == "Pair"){
      hashHistory.push('/home');
    } else if(cookies.get('userType') == "Admin"){
      //console.log('enter');
      hashHistory.push('/adminHome');
    }else {
      loginPage = (<div style={{marginLeft:'40%'}}>
<div>
<h2 style ={{paddingTop:'18%'}}>DevOps Engineering As A Service</h2>
<h3>
Sign-in to your account
</h3>
</div>
<Form style={{marginTop:'2%'}}>
    <Form.Field width={6} icon ='lock'>
      <Input placeholder='Username' onChange={this.handleUserName}/>
    </Form.Field>
    <Form.Field width={6}>
      <input type = 'password' placeholder='Password' onChange={this.handlePassword}/>
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='Remember me' />
    </Form.Field> */}
    <Button  style ={{marginLeft:'13%'}}color = 'teal' type='submit' onClick={this.login.bind(this)}>Submit</Button>
  </Form>
</div>
)}

    return (
      <div>
        {loginPage}
        <ToastContainer ref='asd'
          toastMessageFactory={ToastMessageFactory}
          className='toast-top-center'/>
      </div>
    )
  }
}

module.exports = MenuExampleContentProp;
