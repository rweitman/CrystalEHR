import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = props => (
  <Card className = 'container'>
    <Link to='/main'>Main</Link>
    <form action='/' onSubmit={props.onSubmit}>
      <h2 className='card-heading'>Sign Up</h2>


      {props.errors.summary && <p className="error-message">{props.errors.summary}</p>}

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
          floatingLabelText='Email'
          name='email'
          errorText={props.errors.email}
          onChange={props.onChange}
          value={props.user.email}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          name='password'
          errorText={props.errors.password}
          type='password'
          onChange={props.onChange}
          value={props.user.password}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password Confirmation'
          name='password2'
          errorText={props.errors.password2}
          type='password'
          onChange={props.onChange}
          value={props.user.password2}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Profession'
          name='profession'
          errorText={props.errors.profession}
          onChange={props.onChange}
          value={props.user.profession}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Doctor ID'
          name='doctorId'
          errorText={props.errors.doctorId}
          onChange={props.onChange}
          value={props.user.doctorId}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Hospital ID'
          name='hospitalId'
          errorText={props.errors.hospitalId}
          onChange={props.onChange}
          value={props.user.hospitalId}
        />
      </div>

      <div className='button-line'>
        <RaisedButton type='submit' label='Create New Account' primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
); // END SIGNUPFORM COMPONENT

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
