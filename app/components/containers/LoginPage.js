import React, { PropTypes } from 'react';
import { Route, browserHistory, Router } from 'react-router';
import LoginForm from '../children/LoginForm.js';
import Helper from "../utils/helpers.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  } // END CONSTRUCTOR METHOD

  changeUser(event) {

    var field = event.target.name;
    var user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });


    console.log("changeUser");
  }

  processForm(event) {
    event.preventDefault();
    console.log('Username: ' + this.state.user.username);
    console.log('Password: ' + this.state.user.password);
    Helper.loginAuth(this.state.user, function (res) {
      console.log(res);
      browserHistory.push('/main');
    });

  }

  render() {
    return (

      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  } // END RENDER FUNCTION



} // END SIGNUPPAGE CLASS

export default LoginPage;
