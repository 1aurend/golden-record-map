import React from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass'
import styled from 'styled-components'
import Popup from '@bit/semantic-org.semantic-ui-react.popup'
import { Link } from 'react-router-dom'
import countries from '../countries.js'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const Slider = styled(Flex)`
  height: ${props => props.height || '100vh'};
  padding-top: ${props =>  props.height === '65vh' ? '10vh' : '20vh'};
  transition: height 2s, padding-top 2s;
`


export default function Map({height}) {
  const colors = ['gold', 'purple', 'gray']
  return (
    <Slider
      height={height}
      width={'75vw'}
      justifyContent='center'
      pl={5}
      pr={5}
      bg='black'
      flexDirection='row'
      flexWrap='wrap'
      alignContent='flex-start'
      >
      {style}
      {
        Object.entries(countries).map(([key, country]) => {
          const bg = colors[Math.floor(Math.random() * Math.floor(3))]
          return (
            <Popup
              hoverable
              trigger={
                <Button
                  width={'8vw'}
                  height={'8vw'}
                  bg={bg}
                  color={bg === 'gold' ? 'black' : 'white'}
                  m={1}>
                  {country.name}
                </Button>
              }
              content={
                <div>
                  <p>{country.tracks.length} tracks</p>
                  <Link to={`/${key.toLowerCase()}`}>details</Link>
                </div>
              }
              />
          )
        })
      }
  </Slider>
  )
}
