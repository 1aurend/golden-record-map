import React from 'react'
import {
  Flex,
  Button,
  Box,
  Text
} from 'rebass'
import styled from 'styled-components'
import {
  Link,
  useHistory
} from 'react-router-dom'
import countries from '../countries'
import music from '../music'


const Slider = styled(Flex)`
  height: ${props => props.height || '100vh'};
  padding-top: ${props =>  props.height === '65vh' ? '15vh' : '20vh'};
  padding-left: ${props =>  props.height === '65vh' ? '20vh' : '25vh'};
  padding-right: ${props =>  props.height === '65vh' ? '20vh' : '25vh'};
  transition: height 2s, padding-top 2s;
`
const Shrinker = styled(Button)`
  height: ${props => props.height === '65vh' ? '6vw' : '8vw'};
  width: ${props => props.height === '65vh' ? '6vw' : '8vw'};
  transition: height 1s, width 1s;
  background-color: ${props => props.highlight ? 'gold' : 'gray' };
  color: ${props => props.highlight ? 'black' : 'white' };

  &:hover {
    filter: ${props => props.highlight ? '' : 'brightness(150%)' };
  }
`


export default function Map({ height, highlight, setTrack }) {
  const history = useHistory()

  const onSelectCountry = (e) => {
    if (setTrack) {
      setTrack(music[(countries[e.target.value].tracks[0])-1])
    }
    history.push(countries[e.target.value].path)
  }

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
          // QUESTION: should this be conditional and omit the popup if country is currently selected?
          return (
            <Popup
              hoverable
              trigger={
                <Shrinker
                  height={height}
                  highlight={key === highlight}
                  m={1}
                  onClick={onSelectCountry}
                  value={key}
                  >
                  {country.name}
                </Shrinker>
              }
              content={
                <Box
                  m={1}
                  p={1}
                  textAlign='left'
                  >
                  {
                    country.tracks.map((track, i) => {
                      const trackData = music[track-1]
                      return (
                        <Text
                          key={track-1}
                          pb={1}
                          fontSize={12}
                          >
                          <Link
                            onClick={() => {
                              setTrack(music[track-1])
                              history.push(country.url)
                            }}
                            style={{color:'black', textDecoration: 'underline', fontWeight: 'bold'}}
                            >
                            {i+1}. {trackData.Piece}
                          </Link>
                          <Text fontSize={10}>{trackData.Composer}</Text>
                        </Text>
                      )
                    })
                  }
                </Box>
              }
              />
          )
        })
      }
  </Slider>
  )
}
