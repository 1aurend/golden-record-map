import React from 'react'
import {
  Box
 } from 'rebass'
import {
  useHistory
 } from 'react-router-dom'
import styled from '@emotion/styled'
import debounce from 'lodash.debounce'
import countries from '../countries'
import background from '../assets/background'
import Borders from './Borders'
import Country from './Country'
import music from '../music'
import useAspectRatio from '../useAspectRatio'


export default function MapMap({ highlight, setTrack, view = [1165, 0, 6975, 4650], setPopup, setPlaying }) {
  const history = useHistory()
  const layout = useAspectRatio()
  const debounceHandler = debounce(setPopup, 75, {'leading':false})

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
    <Box
      sx = {{
        width: layout === 'h' ? '75vw' : '100vw',
        height: layout === 'h' ? '100vh' : '65vh',
        order: layout === 'h' ? 1 : 2,
      }}
      >
      <svg viewBox={view}>
        <g>
          {background}
          {svgCountries}
        </g>
        <Borders/>
      </svg>
    </Box>
    )
  }
