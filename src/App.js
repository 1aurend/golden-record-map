import React, { useState } from 'react'
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
  const [mapHeight, setMapHeight] = useState('100vh')
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <World mapHeight={mapHeight} setMapHeight={setMapHeight}/>
        </Route>
        <Route path='/:country'>
          <ValidateCountry mapHeight={mapHeight} setMapHeight={setMapHeight}/>
        </Route>
      </Switch>
    </Router>
  )
}


function ValidateCountry({ mapHeight, setMapHeight }) {
  const { country } = useParams()
  const valid = Object.keys(countries).includes(country.toUpperCase())
  return (
    <Route
      render={() =>
        valid ? (
          <Country
            country={country.toUpperCase()}
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
            />
        ) : (
          <Redirect to='/'/>
        )
      }
    />
  )
}
