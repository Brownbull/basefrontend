import React, { Component } from 'react';
import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'

// services
import PlayerAPI from '../../services/playerAPI/index'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullRoster;