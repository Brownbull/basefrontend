import React, { Component } from 'react';
import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'
import './App.css';

// scenes
import Header from './scenes/Header/index'
import Main from './scenes/Main/index'

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
