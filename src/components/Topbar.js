import React from 'react'
import {
  Flex,
  Box,
  Text
} from 'rebass'
import {
  Select,
  Label
} from '@rebass/forms'
import styled from '@emotion/styled'
import { useHistory, Link } from 'react-router-dom'
import countries from '../countries'
import music from '../music'
import useAspectRatio from '../useAspectRatio'
import MapNav from './MapNav'
import RecordSpinner from './RecordSpinner'




export default function Sidebar({ country, setTrack, setPlaying, playing, currentTrack }) {
  const history = useHistory()
  const [layout, dimensions] = useAspectRatio()
  const onSelectCountry = (e) => {
    switch (e.target.value) {
    case '-----':
      history.push('/')
      break
    default:
      Object.entries(countries).forEach(([ key, country ]) => {
        if (country.name === e.target.value) {
          setTrack(music[(countries[key].tracks[0])-1])
          setPlaying(false)
          history.push(country.url)
          return
        }
      })
      break
    }
  }
  const onSelectTrack = (e) => {
    switch (e.target.value) {
    case '-----':
      history.push('/')
      break
    default:
      Object.entries(countries).forEach(([ key, country ]) => {
        if (country.name === e.target.value) {
          setTrack(music[(countries[key].tracks[0])-1])
          setPlaying(false)
          history.push(country.url)
          return
        }
      })
      break
    }
  }


  return (
    <Flex
      sx={{
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'fixed',
        zIndex: 75,
        alignItems:'center',
      }}>
      <Flex
        sx={{
          width: '100%',
          height: 'auto',
          bg: 'white',
          alignItems:'center',
          flexDirection: layout === 'h' ? 'row' : 'column',
          padding: '1vmin',
          zIndex: 85,
        }}
        >
        <MapNav
          setTrack={setTrack}
          setPlaying={setPlaying}
          />
          {country &&
            <Flex
              sx={{
                flexDirection: layout === 'h' ? 'row' : 'column',
              }}>
              <Box
                sx={{
                  margin: '1vmin'
                }}>
                <Select
                  id='country'
                  name='country'
                  value={country ? countries[country].name : ''}
                  onChange={onSelectCountry}
                  sx={{
                    fontSize: ['14px','15px','16px'],
                    width: layout === 'h' ? '35vw' : '70vw',
                    fontFamily: 'body',
                    borderColor: 'gold',
                    height: 'auto',
                  }}>
                  <option key='empty'></option>
                  {Object.entries(countries).map(([ key, country ]) => (
                    <option
                      key={key}>
                      {country.name}
                    </option>
                  ))}
                  >
                </Select>
              </Box>
              <Box
                sx={{
                  margin: '1vmin'
                }}>
                <Select
                  id='track'
                  name='track'
                  value={currentTrack ? currentTrack.Piece : ''}
                  onChange= {onSelectTrack}
                  sx={{
                    fontSize: ['14px','15px','16px'],
                    width: layout === 'h' ? '35vw' : '70vw',
                    fontFamily: 'body',
                    borderColor: 'gold',
                    height: 'auto',
                  }}>
                  <option key='empty'></option>
                  {Object.entries(countries).map(([ key, country ]) => (
                    <option
                      key={key}>
                      {country.name}
                    </option>
                  ))}
                  >
                </Select>
              </Box>
            </Flex>
          }
        {!country &&
          <Box
            sx={{
              margin: '1vmin'
            }}>
            <Select
              id='country'
              name='country'
              value={country ? countries[country].name : ''}
              onChange={onSelectCountry}
              sx={{
                fontSize: ['14px','15px','16px'],
                width: layout === 'h' ? '35vw' : '70vw',
                fontFamily: 'body',
                borderColor: 'gold',
                height: 'auto',
              }}>
              <option key='empty'>Start Exploring...</option>
              {Object.entries(countries).map(([ key, country ]) => (
                <option
                  key={key}>
                  {country.name}
                </option>
              ))}
              >
            </Select>
          </Box>
        }
      </Flex>
      <Box
        sx={{
          position: layout === 'h' ? 'fixed' : 'relative',
          right: layout === 'h' ? '0' : 'auto',
          top: layout === 'h' ? '25vh' : 'auto',
        }}>
        <RecordSpinner playing={playing} country={country}/>
      </Box>
    </Flex>
  )
}
