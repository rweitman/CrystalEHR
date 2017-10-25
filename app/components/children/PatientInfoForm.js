import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var patientStyle = {
  color: '#2e96ea'
}

const PatientInfoForm = props => (
   <Card className = 'register container'>

  <div className='patientInfo'>

      <div className='row'>
      <h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
      <h3 className = 'col-md-6 text-right'><small></small></h3>
      <h1 style= {patientStyle} className = 'col-md-12 text-left'><large>Patient Information</large></h1>
    </div>

    <form action='/' onSubmit={props.onSubmit}>


      {props.errors.summary && <p className="error-message">{props.errors.summary}</p>}
      <div className='field-lineMargins'>

      <h2 className='titles'>General Information</h2>

     <div className='field-line'>
        <TextField
          floatingLabelText='First Name'
          name='firstName'
          errorText={props.errors.firstName}
          onChange={props.onChange}
          value={props.user.firstName}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Last Name'
          name='lastName'
          errorText={props.errors.lastName}
          onChange={props.onChange}
          value={props.user.lastName}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Height'
          name='height'
          errorText={props.errors.height}
          onChange={props.onChange}
          value={props.user.height}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Weight'
          name='weight'
          errorText={props.errors.weight}
          onChange={props.onChange}
          value={props.user.weight}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Date of Birth'
          name='dob'
          errorText={props.errors.dob}
          onChange={props.onChange}
          value={props.user.dob}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Age'
          name='age'
          errorText={props.errors.age}
          onChange={props.onChange}
          value={props.user.age}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Gender'
          name='gender'
          errorText={props.errors.gender}
          onChange={props.onChange}
          value={props.user.gender}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='City'
          name='city'
          errorText={props.errors.city}
          onChange={props.onChange}
          value={props.user.city}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='State'
          name='state'
          errorText={props.errors.state}
          onChange={props.onChange}
          value={props.user.state}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Zip Code'
          name='zipCode'
          errorText={props.errors.zipCode}
          onChange={props.onChange}
          value={props.user.zipCode}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Phone'
          name='phone'
          errorText={props.errors.phone}
          onChange={props.onChange}
          value={props.user.phone}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Email'
          name='email'
          errorText={props.errors.email}
          onChange={props.onChange}
          value={props.user.email}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Marital Status'
          name='maritalStatus'
          errorText={props.errors.maritalStatus}
          onChange={props.onChange}
          value={props.user.maritalStatus}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Education'
          name='education'
          errorText={props.errors.education}
          onChange={props.onChange}
          value={props.user.education}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Occupation'
          name='occupation'
          errorText={props.errors.occupation}
          onChange={props.onChange}
          value={props.user.occupation}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Income'
          name='income'
          errorText={props.errors.income}
          onChange={props.onChange}
          value={props.user.income}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Referral Info'
          name='referralInfo'
          errorText={props.errors.referralInfo}
          onChange={props.onChange}
          value={props.user.referralInfo}
        />
      </div>

      <h2 className='titles'>Reason for Visit</h2>

      <div className='field-line'>
        <TextField
          floatingLabelText='Reason for Visit'
          name='visitReason'
          errorText={props.errors.visitReason}
          onChange={props.onChange}
          value={props.user.visitReason}
        />
      </div>

      <h2 className='titles'>Medical Records</h2>

      <div className='field-line'>
        <TextField
          floatingLabelText='Past Medical History'
          name='medHist'
          errorText={props.errors.medHist}
          onChange={props.onChange}
          value={props.user.medHist}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Allergies'
          name='allergies'
          errorText={props.errors.allergies}
          onChange={props.onChange}
          value={props.user.allergies}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Immunizations'
          name='immunizations'
          errorText={props.errors.immunizations}
          onChange={props.onChange}
          value={props.user.immunizations}
        />
      </div>

      <h2 className='titles'>Family Medical History</h2>

      <div className='field-line'>
        <TextField
          floatingLabelText='Heart Disease'
          name='heartDisease'
          errorText={props.errors.heartDisease}
          onChange={props.onChange}
          value={props.user.heartDisease}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Heart Attack'
          name='heartAttack'
          errorText={props.errors.heartAttack}
          onChange={props.onChange}
          value={props.user.heartAttack}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Cancer'
          name='cancer'
          errorText={props.errors.cancer}
          onChange={props.onChange}
          value={props.user.cancer}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Diabetes'
          name='diabetes'
          errorText={props.errors.diabetes}
          onChange={props.onChange}
          value={props.user.diabetes}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='High Blood Pressure'
          name='highBloodPressure'
          errorText={props.errors.highBloodPressure}
          onChange={props.onChange}
          value={props.user.highBloodPressure}
        />
      </div>

      <h2 className='titles'>Vitals</h2>

      <div className='field-line'>
        <TextField
          floatingLabelText='Temperature'
          name='temperature'
          errorText={props.errors.temperature}
          onChange={props.onChange}
          value={props.user.temperature}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Heart Rate'
          name='heartRate'
          errorText={props.errors.heartRate}
          onChange={props.onChange}
          value={props.user.heartRate}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Systolic Blood Pressure'
          name='systolicBloodPressure'
          errorText={props.errors.systolicBloodPressure}
          onChange={props.onChange}
          value={props.user.systolicBloodPressure}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Diastolic Blood Pressure'
          name='diastolicBloodPressure'
          errorText={props.errors.diastolicBloodPressure}
          onChange={props.onChange}
          value={props.user.diastolicBloodPressure}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Respiratory Rate'
          name='respiratoryRate'
          errorText={props.errors.respiratoryRate}
          onChange={props.onChange}
          value={props.user.respiratoryRate}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='BMI'
          name='bmi'
          errorText={props.errors.bmi}
          onChange={props.onChange}
          value={props.user.bmi}
        />
      </div>

      <h2 className='titles'>Personal Habits</h2>

      <div className='field-line'>
        <TextField
          floatingLabelText='Alcohol Units Per Week'
          name='alcohol'
          errorText={props.errors.alcohol}
          onChange={props.onChange}
          value={props.user.alcohol}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Smoking'
          name='smoking'
          errorText={props.errors.smoking}
          onChange={props.onChange}
          value={props.user.smoking}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Daily Exercise'
          name='dailyExercise'
          errorText={props.errors.dailyExercise}
          onChange={props.onChange}
          value={props.user.dailyExercise}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Foreign Travel'
          name='foreignTravel'
          errorText={props.errors.foreignTravel}
          onChange={props.onChange}
          value={props.user.foreignTravel}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Other Comments'
          name='otherComments'
          errorText={props.errors.otherComments}
          onChange={props.onChange}
          value={props.user.otherComments}
        />
      </div>

      <div className='button-line-two'>
        <button class="btn-floating blue" type='submit' label='Create New Account'>Submit</button>

      </div>
      </div>


    </form>

    </div>

  </Card>
); // END SIGNUPFORM COMPONENT

PatientInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default PatientInfoForm;
