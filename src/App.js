import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
 } from 'react-router-dom'
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
        <Route path='/:country'>
          <ValidateCountry />
        </Route>
      </Switch>
    </Router>
  )
}


function ValidateCountry() {
  const { country } = useParams()
  const valid = Object.keys(countries).includes(country.toUpperCase())
  return (
    <Route
      render={() =>
        valid ? (
          <Country country={country.toUpperCase()}/>
        ) : (
          <Redirect to='/'/>
        )
      }
    />
  )
}
