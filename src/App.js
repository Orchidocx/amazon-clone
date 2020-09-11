import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser) {
        // User just logged in / user was logged in
        dispatch({type: 'SET_USER', user: authUser});
      } else {
        // user is logged off
        dispatch({type: 'SET_USER', user: null});
      }
    });
  }, [/* if empty, only run once when app component loads;*/]);
  return (
    // BEM Convention
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Payment/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
