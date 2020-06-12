import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
 } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Interface from './components/Interface'
import countries from './countries'


export default function AppRouter() {
  const [detailVisible, setDetailVisible] = useState(false)
  const [currentTrack, setTrack] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Interface
              detailVisible={detailVisible}
              setDetailVisible={setDetailVisible}
              currentTrack={currentTrack}
              setTrack={setTrack}
              />
          </Route>
          <Route path='/:country'>
            <ValidateCountry
              detailVisible={detailVisible}
              setDetailVisible={setDetailVisible}
              currentTrack={currentTrack}
              setTrack={setTrack}
              />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}


function ValidateCountry({ detailVisible, setDetailVisible, currentTrack, setTrack }) {
  const { country } = useParams()
  const valid = Object.keys(countries).includes(country.toUpperCase())
  const music = import('./music').then(music => music)

  useEffect(() => {
    if (valid && !currentTrack) {
      setTrack(music[(countries[country.toUpperCase()].tracks[0])-1])
    }
  }, [country, setTrack, valid, currentTrack, setDetailVisible, music])

  return (
    <Route
      render={() =>
        valid ? (
          <Interface
            country={country.toUpperCase()}
            currentTrack={currentTrack || music[(countries[country.toUpperCase()].tracks[0])-1]}
            setTrack={setTrack}
            detailVisible={detailVisible}
            setDetailVisible={setDetailVisible}
            view={countries[country.toUpperCase()].view}
            />
        ) : (
          <Redirect to='/'/>
        )
      }
    />
  )
}
