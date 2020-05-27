import React, { useState, useEffect } from 'react'
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
import music from './music'


export default function AppRouter() {
  const [mapHeight, setMapHeight] = useState('100vh')
  const [currentTrack, setTrack] = useState(null)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <World
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
            currentTrack={currentTrack}
            setTrack={setTrack}
            />
        </Route>
        <Route path='/:country'>
          <ValidateCountry
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
            currentTrack={currentTrack}
            setTrack={setTrack}
            />
        </Route>
      </Switch>
    </Router>
  )
}


function ValidateCountry({ mapHeight, setMapHeight, currentTrack, setTrack }) {
  const { country } = useParams()
  const valid = Object.keys(countries).includes(country.toUpperCase())

  useEffect(() => {
    if (valid && !currentTrack) {
      setTrack(music[(countries[country.toUpperCase()].tracks[0])-1])
    }
  }, [country, setTrack, valid, currentTrack])

  return (
    <Route
      render={() =>
        valid ? (
          <Country
            country={country.toUpperCase()}
            currentTrack={currentTrack || music[(countries[country.toUpperCase()].tracks[0])-1]}
            setTrack={setTrack}
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
