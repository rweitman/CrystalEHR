import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, browserHistory, Router } from 'react-router';
import LoginPage from "./components/containers/LoginPage.js";
import SignUpPage from './components/containers/SignUpPage.js';
import PatientInfoPage from './components/containers/PatientInfoPage.js';
import Main from './components/Main.js'
// import LoginPage from './components/containers/LoginPage.js';
// import routes from './routes.js';

// Include the main Main Component
// var Main = require("./components/Main");


// console.log("YOU ARE WORKING!");
// This code here allows us to render our main component (in this case Main)
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <Route path="/" component={LoginPage}>

      </Route>

      <Route path="/signup" component={SignUpPage}>

      </Route>

      <Route path="/main" component={Main}>

      </Route>

      {/* <Route path="/patientinfo" component={PatientInfoPage}>

      </Route> */}




    </Router>
  </MuiThemeProvider>), document.getElementById("app"));
