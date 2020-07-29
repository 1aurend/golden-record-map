import React from 'react'
import {
  Flex,
  Box,
} from 'rebass'
import {
  Select,
  Label
} from '@rebass/forms'
import { useHistory } from 'react-router-dom'
import countries from '../countries'
import music from '../music'
import useAspectRatio from '../useAspectRatio'
import MapNav from './MapNav'
import RecordSpinner from './RecordSpinner'


export default function Sidebar({ country, setTrack, setPlaying, playing, currentTrack }) {
  const history = useHistory()
  const layout = useAspectRatio()[0]

  const onSelectCountry = (e) => {
    Object.entries(countries).forEach(([ key, country ]) => {
      if (country.name === e.target.value) {
        setTrack(music[(countries[key].tracks[0])-1])
        // setPlaying(false)
        history.push(country.url)
        return
      }
    })
  }
  const onSelectTrack = (e) => {
    const selectedIndex = e.target.options.selectedIndex
    const selectedTrack = countries[country].tracks[selectedIndex-1]
    setTrack(music[selectedTrack-1])
    // setPlaying(false)
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
        <Flex
          sx={{
            flexDirection: layout === 'h' ? 'row' : 'column',
          }}>
          <Box
            sx={{
              margin: '1vmin'
            }}>
            <Label htmlFor='country'></Label>
            <Select
              id='country'
              name='country'
              value={country ? countries[country].name : ''}
              onChange={onSelectCountry}
              sx={{
                fontSize: ['14px','15px','16px'],
                fontWeight: 'bold',
                width: layout === 'h' ? '35vw' : '70vw',
                fontFamily: 'body',
                borderColor: 'gold',
                height: 'auto',
              }}>
              <option key='empty'>{country? '' : 'Start Exploring...'}</option>
              {Object.entries(countries).map(([ key, country ]) => (
                <option
                  key={key}>
                  {country.name}
                </option>
              ))}
              >
            </Select>
          </Box>
          {country &&
            <Box
              sx={{
                margin: '1vmin'
              }}>
              <Label htmlFor='track'></Label>
              <Select
                id='track'
                name='track'
                value={currentTrack ? currentTrack.ShortPiece : ''}
                onChange={onSelectTrack}
                sx={{
                  fontSize: ['14px','15px','16px'],
                  fontWeight: 'bold',
                  width: layout === 'h' ? '35vw' : '70vw',
                  fontFamily: 'body',
                  borderColor: 'gold',
                  height: 'auto',
                }}>
                <option key='empty'></option>
                {(countries[country].tracks).map((track, i) => (
                  <option
                    key={i}
                    >
                    {music[track-1].ShortPiece}
                  </option>
                ))}
                >
              </Select>
            </Box>
          }
        </Flex>
      </Flex>
      <Box
        sx={{
          position: layout === 'h' ? 'fixed' : 'relative',
          right: layout === 'h' ? '0' : 'auto',
          top: layout === 'h' ? '25vh' : 'auto',
        }}>
        {country &&
          <RecordSpinner playing={playing} country={country}/>
        }
      </Box>
    </Flex>
  )
}
