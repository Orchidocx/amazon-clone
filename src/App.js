import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQ0wdK9xTeFTh6A8iLNUquBc38vSctYBcaY8tr3LMim8xh4lnq1ot40QCRWbAR4WPjWG9tXgZONF26GnIChjalk00Uh7kZRgA');


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
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/orders">
            <Orders/>
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
