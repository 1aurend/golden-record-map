import React from 'react'
import {
  Box,
  Flex,
  Text
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

export default function MapMap({ country, highlight, setTrack, view = [1165, -1000, 6975, 4650], setPopup, setPlaying, playing }) {
  const history = useHistory()
  const [layout, dimensions] = useAspectRatio()
  const debounceHandler = debounce(setPopup, 75, {'leading':false})

  const vw = dimensions.width
  const vh = dimensions.height
  const yOffset = (view[2] - view[3])/2
  // const yCorrection = (view[2] - view[2]/vw*vh)/2
  const scaledViewNormal = [ view[0], view[1]+yOffset, view[2], view[2]]
  const scaledViewPortrait = [ view[0], view[1]-yOffset*2, view[2], view[2]/vw*vh]
  const scaledView = layout === 'h' ? scaledViewNormal : scaledViewPortrait

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
        width: '100vw',
        height: layout === 'h' ? '100vh' : '90vh',
        position: 'absolute',
        bottom:'0px',
        zIndex: 1,
        overflow:'hidden',
      }}
      >
      <Text
        sx={{
          fontFamily: 'body',
          fontSize: ['3vmin','2.5vmin','2vmin'],
          lineHeight: ['4vmin','3.5vmin','3vmin'],
          color: 'white',
          width: '50vw',
          overflow: 'auto',
          position: 'fixed',
          zIndex: 5,
          height: '200px',
          top: '75vh',
          textAlign: 'center',
          right:'25vw',

        }}
      >{country? '' :
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Pretium quam vulputate dignissim suspendisse in est ante in. '}
      </Text>
      <svg viewBox={scaledView} >
        <g>
          {background}
          {svgCountries}
        </g>
        <Borders/>
      </svg>

    </Box>
    )
  }
