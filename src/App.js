import React,{ Fragment } from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import NavBar from './navbar/NavBar';
import Courses from './course/Courses';
import './App.css';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/list-of-courses" component={Courses}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
