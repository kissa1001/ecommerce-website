import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
