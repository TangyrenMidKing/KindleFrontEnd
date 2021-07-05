import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

import MainPage from './Pages/MainPage'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import ResetPassword from './Pages/ResetPassword';

function App() {

  return (
  <Router >
    <Switch>
      
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/signup" exact>
        <SignUp />
      </Route>

      <Route path="/login" exact>
        <LogIn />
      </Route>

      <Route path="/resetpassword" exact>
        <ResetPassword />
      </Route>

      <Redirect to="/" />
    </Switch>  
  </Router>
  );
}

export default App;
