import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={HomePage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;

