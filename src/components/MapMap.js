import React, { useEffect, useState } from 'react'
import {
  Box
 } from 'rebass'
import {
  useHistory
 } from 'react-router-dom'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import countries from '../countries'
import Borders from './Borders'
import Country from './Country'
import music from '../music'

const MapBox = styled(Box)`
  width: 75vw;
  height: '100vh';
`


export default function MapMap({ highlight, setTrack, view = [1165, 0, 6975, 4650], setPopup, setPlaying }) {
  const history = useHistory()
  const debounceHandler = debounce(setPopup, 75, {'leading':false})
  const [background, setBackground] = useState()

  useEffect(() => {
    import('../assets/background').then(background => setBackground(background.default))
  }, [])

  const onSelectCountry = (country) => {
    if (setTrack) {
      setTrack(music[(countries[country].tracks[0])-1])
      setPlaying(false)
    }
    history.push(countries[country].url)
  }

  const svgCountries = Object.entries(countries).map(([country, data]) => {
    const fill = country === highlight ? 'purple' : ''
    return (
      <Country
        key={country}
        onClick={onSelectCountry}
        fill={fill}
        path={data.path}
        id={country}
        setPopup={debounceHandler}
      />
    )
  })

  return (
    <MapBox>
      <svg viewBox={view}>
        <g>
          {background}
          {svgCountries}
        </g>
        <Borders/>
      </svg>
    </MapBox>
    )
  }
