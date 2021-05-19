import React from 'react'
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Login from './Components/LoginFolder/Login';
import Register from './Components/RegistrationFolder/Register';
import Dashboard from './Components/DashboardFolder/Dashboard';
import Dashboard2 from './Components/DashboardFolder/Dashboard2';

function App() {
  return (
    <div className="App">
       <Switch>      
          <Route exact path = "/"  component={Login}/>
          <Route exact path = "/register"  component={Register}/>
          <Route exact path = "/dashboard"  component={Dashboard}/>
          <Route exact path = "/dashboard2"  component={Dashboard2}/>
       </Switch>
    </div>
  );
}

export default App;
