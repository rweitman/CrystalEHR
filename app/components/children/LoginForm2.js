import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = props => (
  <Card className = 'container'>
    <Link to='/main'>Main</Link>
    <Link to='/signup'>Signup</Link>
    <form action='/login' onSubmit={props.onSubmit}>
      <h2 className='card-heading'>Login</h2>


      {props.errors.summary && <p className="error-message">{props.errors.summary}</p>}

      <div className='field-line'>
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
        <RaisedButton type='submit' label='Login' primary />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Sign Up</Link></CardText>
    </form>
  </Card>
); // END SIGNUPFORM COMPONENT

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
