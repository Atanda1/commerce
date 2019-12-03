import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInSignUp from './pages/sign-up-sign-in/sign-up-sign-in.component';

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' ccomponent={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
