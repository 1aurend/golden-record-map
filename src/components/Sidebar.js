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



export default function Sidebar({ country, setTrack, setPlaying }) {
  const history = useHistory()
  const layout = useAspectRatio()
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
  return (
    <Flex
      sx={{
        width: layout === 'h' ? '25vw' : '100vw',
        height: layout === 'h' ? '100vh' : 'auto',
        bg: 'white',
        alignItems:'center',
        flexDirection:'column',
        padding: layout === 'h' ? '1% 2%':'2%',
        order: layout === 'h' ? 3 : 1,
      }}
      >
      <MapNav
        setTrack={setTrack}
        setPlaying={setPlaying}
        />
      {country &&
        <Box
          sx={{
            margin: layout === 'h' ? '8% 0' : '4% 0',
          }}>

          <Select
            id='country'
            name='country'
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            sx={{
              fontSize: ['14px','15px','16px'],
              width: layout === 'h' ? '20vw' : '80vw',
              fontFamily: 'body',
              borderColor: 'gold'
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
      }
      <Text
        sx={{
          fontFamily: 'heading',
          fontSize: layout === 'h' ? ['18px','24px','36px'] : ['24px','36px','48px'],
          fontWeight: '700',
          textAlign: 'center',
          lineHeight: layout === 'h' ? ['22px','28px','40px'] : ['28px','40px','52px'],
          marginTop: layout === 'h' ? ['0px','2px','10px'] : ['4px','10px','12px'],
        }}>
        {country? countries[country].name : 'Voyager Golden Record'}
      </Text>
      {!country &&
        <Box
          sx={{
            margin: layout === 'h' ? '8% 0' : '4% 0',
          }}>
          <Select
            id='country'
            name='country'
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            sx={{
              fontSize: ['14px','15px','16px'],
              width: layout === 'h' ? '20vw' : '80vw',
              fontFamily: 'body',
              borderColor: 'gold'
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
      <Text
        sx={{
          fontFamily: 'body',
          fontSize: ['14px','18px','22px'],
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: layout === 'h' ? '3%' : '1.5%',
        }}>
        {country? '' : 'About This Map'}
      </Text>
      {country?
        <Box
          sx={{
            fontFamily: 'body',
          }}>
          {
            countries[country].tracks.map((track, i) => {
              const trackData = music[track-1]
              return (
                <Text
                  key={track-1}
                  sx={{
                    margin: ['10px 0px','16px 0px','22px 0px'],
                    lineHeight: layout === 'h' ? ['18px','24px','32px'] : ['20px','28px','40px'],
                    fontSize: layout === 'h' ? ['14px','20px','28px'] : ['16px','20px','36px'],
                    fontWeight: '700',
                    textAlign: 'center',
                    '& > a' : {
                      textDecoration: 'none',
                      color: 'gold',
                      '&:hover': {
                        color: 'green'
                      }
                    }
                  }}>{i+1}.&nbsp;
                  <Link
                    onClick={() => {setTrack(music[track-1]);setPlaying(false)}}
                    >
                    {trackData.Piece}
                  </Link>
                  <Text
                    sx={{
                      fontSize: ['10px','12px','14px'],
                      fontWeight: '400',
                      margin: ['6px 0px','8px 0px','10px 0px'],
                      textTransform: 'uppercase',
                      letterSpacing: ['1px','1.25px','1.5px'],
                      lineHeight: ['14px','16px','18px'],
                      color: 'grey'
                    }}
                  >{trackData.Composer}
                  </Text>
                </Text>
              )
            })
          }
        </Box>
        :
        <>
          <Text
            sx={{
              fontFamily: 'body',
              fontSize: ['12px','14px','16px'],
              padding: '0% 4%',
              lineHeight: ['18px','21px','24px'],
              overflow: 'scroll',
            }}

          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Pretium quam vulputate dignissim suspendisse in est ante in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Luctus venenatis lectus magna fringilla urna porttitor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec enim diam vulputate ut pharetra. Feugiat scelerisque varius morbi enim nunc faucibus a. Metus vulputate eu scelerisque felis imperdiet. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Eros in cursus turpis massa tincidunt.
        </Text>
      </>
    }
    </Flex>
  )
}
