import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions.js"
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInSignUp from './pages/sign-up-sign-in/sign-up-sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component { 
unsubscribeFromAuth = null;

componentDidMount () {
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  if(userAuth) {
   const userRef = await createUserProfileDocument(userAuth);

   userRef.onSnapshot (snapShot => 
    {
        setCurrentUser ({
          id : snapShot.data,
          ...snapShot.data()  
        
      }
      );
    }
    );
  } 
  else setCurrentUser( userAuth);
  })
}

componentWillUnmount () {
  this.unsubscribeFromAuth();
}


  render () {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signinup' render= { () => this.props.currentUser ? (<Redirect to="/"/>): (<SignInSignUp/>)}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});
const mapDispatchToProps = dispatch =>  ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
