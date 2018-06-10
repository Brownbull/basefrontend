import React, { Component } from 'react';
import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'

// scenes
import FullRoster from './scenes/FullRoster/index'
import Player from './scenes/Player/index'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = (props) => (
    <Switch>
        <Route exact path='/roster' component={FullRoster}  />
        <Route path='/roster/:number' component={Player} />
    </Switch>
)

export default Roster;