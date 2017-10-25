import React, { PropTypes } from 'react';
import { Route, browserHistory, Router } from 'react-router';
import PatientInfoForm from '../children/PatientInfoForm.js';
import Helper from "../utils/helpers.js";

class PatientInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        height: '',
        weight: '',
        dob: '',
        age: '',
        gender: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        maritalStatus: '',
        education: '',
        occupation: '',
        income: '',
        referralInfo: '',
        visitReason: '',
        medHist: '',
        allergies: '',
        immunizations: '',
        heartDisease: '',
        heartAttack: '',
        cancer: '',
        diabetes: '',
        highBloodPressure: '',
        temperature: '',
        heartRate: '',
        systolicBloodPressure: '',
        diastolicBloodPressure: '',
        respiratoryRate: '',
        bmi: '',
        alcohol: '',
        smoking: '',
        dailyExercise: '',
        foreignTravel: '',
        otherComments: ''
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
    console.log(this.state.user);

    Helper.newPatient(this.state.user, (res) => {
      console.log(res.data.message);
      if (res.data.message == "Patient Added Successfully") {
        browserHistory.push('/main');
      }

    });

  }

  render() {
    return (

      <PatientInfoForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  } // END RENDER FUNCTION



} // END SIGNUPPAGE CLASS

export default PatientInfoPage;
