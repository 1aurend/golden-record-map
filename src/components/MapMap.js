import React, { useState } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import countries from '../countries'
import background from '../assets/background'
import Borders from './Borders'
import Country from './Country'

const MapBox = styled(Box)`
  width: 75vw;
  height: 100vh;
`


export default function MapMap() {
  const [view, setView] = useState([1165, 0, 6975, 4650])

  const svgCountries = Object.entries(countries).map(([country, data]) => {
    const fill = ''
    return (
      <Country
        onClick={setView}
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
