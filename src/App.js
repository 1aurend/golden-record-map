import React, { useState, useEffect, useRef } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
 } from 'react-router-dom'
import Howler from 'react-howler'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import Interface from './components/Interface'
import countries from './countries'
import music from './music'


export default function AppRouter() {
  const [detailVisible, setDetailVisible] = useState(false)
  const [currentTrack, setTrack] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [splash, setSplash] = useState(true)
  const howler = useRef()

  useEffect(() => {
    if (howler.current) {
      howler.current.load()
    }
  }, [currentTrack])

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
              setPlaying={setPlaying}
              playing={playing}
              splash={splash}
              setSplash={setSplash}
              />
          </Route>
          <Route path='/:country'>
            <ValidateCountry
              detailVisible={detailVisible}
              setDetailVisible={setDetailVisible}
              currentTrack={currentTrack}
              setTrack={setTrack}
              setPlaying={setPlaying}
              playing={playing}
              />
          </Route>
        </Switch>
      </Router>
      {currentTrack &&
        <Howler
          src={currentTrack.Audio}
          preload={true}
          html5={true}
          playing={playing}
          ref={el => howler.current = el}
          />
      }
    </ThemeProvider>
  )
}


function ValidateCountry({ detailVisible, setDetailVisible, currentTrack, setTrack, setPlaying, playing }) {
  const { country } = useParams()
  const valid = Object.keys(countries).includes(country.toUpperCase())

  useEffect(() => {
    if (valid && !currentTrack) {
      setTrack(music[(countries[country.toUpperCase()].tracks[0])-1])
    }
  }, [country, setTrack, valid, currentTrack, setDetailVisible])

  return (
    <Route
      render={() =>
        valid ? (
          <Interface
            country={country.toUpperCase()}
            currentTrack={currentTrack || music[(countries[country.toUpperCase()].tracks[0])-1]}
            setTrack={setTrack}
            setPlaying={setPlaying}
            playing={playing}
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
