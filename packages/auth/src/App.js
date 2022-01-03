import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const packageJson = require('../package.json');

const generateClassName = createGenerateClassName({
    productionPrefix: packageJson.name
})

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
              <Route path="/auth/signin">
                  <SignIn onSignIn={onSignIn}/>
              </Route>
              <Route path="/auth/signup">
                  <SignUp onSignIn={onSignIn}/>
              </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};


///asdfsdf