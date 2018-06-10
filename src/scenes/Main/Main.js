import React, { Component } from 'react';
import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

// scenes
import Home from './scenes/Home/Home'
import Profile from './scenes/Profile/Profile'
import Roster from './scenes/Roster/Roster'
import Schedule from './scenes/Schedule/Schedule'




// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = ({user}) => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <PropsRoute path='/profile' component={Profile} user={user}/>
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
            
        </Switch>
    </main>
)

export default Main;