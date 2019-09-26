import React from 'react';
import './App.css';
import Home from './home.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Frontend from './layout/forntend';



const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>  
  )}></Route> 
)



function App() {
  return (
        
        <Router>          
          <AppRoute path='/' exact layout={Frontend} component={Home}  />
        </Router>
  );
}

export default App;
