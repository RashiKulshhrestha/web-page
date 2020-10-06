import React,{ Fragment } from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Courses from './components/Courses';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/list-of-courses" component={Courses}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
