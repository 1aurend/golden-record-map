import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import World from './components/World'
import Country from './components/Country'
import countries from './countries'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <World />
        </Route>
        <Route exact path='/usa'>
          <Country country={countries.USA} />
        </Route>
      </Switch>
    </Router>
  )
}
