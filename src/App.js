import React, { Component } from 'react';
// import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'
import './App.css';

// scenes
import Header from './scenes/Header/Header'
import Main from './scenes/Main/Main'
import Navigation from "./scenes/Main/scenes/Navigation/Navigation";
import Signin from "./scenes/Main/scenes/Signin/Signin";
import Register from "./scenes/Main/scenes/Register/Register";
import Profile from "./scenes/Main/scenes/Profile/Profile";


const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    DOB: '',
    loginWith: '',
    facebookId: '',
    twitterId: '',
    about: '',
    receiveCoupon: '',
    created: '',
    modified: '',
    status: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        userType: '',
        DOB: '',
        loginWith: '',
        facebookId: '',
        twitterId: '',
        about: '',
        receiveCoupon: '',
        created: '',
        modified: '',
        status: ''
      }
    }
  } // eof constructor

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        userType: data.user_type,
        DOB: data.date_of_birth,
        loginWith: data.login_with,
        facebookId: data.facebook_id,
        twitterId: data.twitter_id,
        about: data.about,
        receiveCoupon: data.receive_coupon,
        created: data.created,
        modified: data.modified,
        status: data.status
      } // eof user def
    }) // eof  this.setState
  } // eof loadUser = (data) =>

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onRouteChange = (route) => {
    // console.log(event.target.value);
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }


  render() {
    const { isSignedIn, route, user} = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            <Header user={user}/>
            <Main user={user}/> 
           {/* <Profile user={this.state.user} /> */}
          </div>
          : (
            route != 'register'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
       
      </div>
    ); // eof return
  } // eof render
} // eof class App extends Component



// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )

export default App
