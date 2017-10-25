import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = props => (
   <Card className = 'logins container'>

  <div className='wrapper'>

   <p className='loginlogo'><img src="Icons/LoginLogo-03.png"></img></p>

    <form action='/login' onSubmit={props.onSubmit}>
      <Link to='/main' className='toplinks'>Main</Link>
      <Link to='/signup' className='toplinks'>Signup</Link>
      {props.errors.summary && <p className="error-message">{props.errors.summary}</p>}

      <div className='input-field'>
        <TextField
          floatingLabelText='Username'
          name='username'
          errorText={props.errors.username}
          onChange={props.onChange}
          value={props.user.username}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          name='password'
          errorText={props.errors.password}
          onChange={props.onChange}
          value={props.user.password}
        />
      </div>

      <div className='button-line'>
      <RaisedButton className="waves-effect btn-flat" type='submit' label='Login'/>
      </div>

      {/* <div className='button-line'>
        <RaisedButton className="waves-effect btn-flat" type='submit' label='Login' primary />
      </div> */}

      <div className='accountLine'>Don't have an account? <Link to={'/signup'}>Sign Up</Link></div>
    </form>
    </div>
  </Card>
); // END SIGNUPFORM COMPONENT

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
