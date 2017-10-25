import React, { PropTypes } from 'react';
import { Route, browserHistory, Router } from 'react-router';
import SignUpForm from '../children/SignUpForm.js';
import Helper from "../utils/helpers.js";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        profession: '',
        doctorId: '',
        hospitalId: '',
        signup: ''
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
    console.log('First Name: ' + this.state.user.firstName);
    console.log('Last Name: ' + this.state.user.lastName);
    console.log('Email: ' + this.state.user.email);
    console.log('Password: ' + this.state.user.password);
    console.log('Password Confirmation: ' + this.state.user.password2);
    console.log('Profession: ' + this.state.user.profession);
    console.log('Doctor ID: ' + this.state.user.doctorId);
    console.log('Hospital ID: ' + this.state.user.hospitalId);

    Helper.signUp(this.state.user, (res) => {
      console.log(res.data.message);
      if (res.data.message == "Signup Success") {
        browserHistory.push('/');
      }

    });

  }

  render() {
    return (

      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  } // END RENDER FUNCTION



} // END SIGNUPPAGE CLASS

export default SignUpPage;
