import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
 } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import theme from './theme'
import Interface from './components/Interface'
import countries from './countries'
import music from './music'


export default function AppRouter() {
  const [mapHeight, setMapHeight] = useState('100vh')
  const [currentTrack, setTrack] = useState(null)
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Interface
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
    </ThemeProvider>
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
          <Interface
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
