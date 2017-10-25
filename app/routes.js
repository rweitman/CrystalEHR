import Main from './components/Main.js';
import LoginPage from './components/containers/LoginPage.js';
import SignUpPage from './components/containers/SignUpPage.js';

const routes = {
  component: Main,
  childRoutes: [
    {
      path: "/",
      component: LoginPage
    },

    {
      path: "/signup",
      component: SignUpPage
    }
  ]
};

export default routes;
