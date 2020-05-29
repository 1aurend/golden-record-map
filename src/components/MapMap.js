import React, { useState } from 'react'
import {
  Box,
  Text
 } from 'rebass'
import {
  Link,
  useHistory
 } from 'react-router-dom'
import styled from 'styled-components'
import countries from '../countries'
import background from '../assets/background'
import Borders from './Borders'
import Country from './Country'
import music from '../music'

const MapBox = styled(Box)`
  width: 75vw;
  height: 100vh;
`


export default function MapMap({ highlight, setTrack }) {
  const [view, setView] = useState([1165, 0, 6975, 4650])
  const history = useHistory()

  const onSelectCountry = (country) => {
    if (setTrack) {
      setTrack(music[(countries[country].tracks[0])-1])
    }
    setView(countries[country].view)
    history.push(countries[country].url)
  }

  const svgCountries = Object.entries(countries).map(([country, data]) => {
    const fill = country === highlight ? 'purple' : ''
    return (
      <Country
        onClick={onSelectCountry}
        fill={fill}
        path={data.path}
        id={country}
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