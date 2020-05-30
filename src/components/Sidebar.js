import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'rebass'
import {
  Select,
  Label
} from '@rebass/forms'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import countries from '../countries'
import music from '../music'

const SideFlex = styled(Flex)`
  width: 25vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  align-items:center;
  flex-direction:column;
  overflow: scroll;
  padding: 10% 10%
`

const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
`

const Subtitle = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
`

const PrettySelect = styled(Select)`
  font-family: ${props => props.theme.fonts.body};
  font-size: 16px;
  width: 13vw;
  margin: 15% 0;
  border-color: ${props => props.theme.colors.gold};
`

const PrettyOption = styled.option`
  background-color: red;
`

const PrettyText = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  margin-top: 10%;
  line-height: 21px;
`

const PlayList = styled(Box)`
  margin-top: 10%;
  font-family: ${props => props.theme.fonts.body};
`

const TrackText = styled(Text)`
  margin-bottom: 60px;
  text-align: center;

  > a {
    text-decoration: none;
    line-height: 36px;
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.colors.gold};
    &:hover {
      color: ${props => props.theme.colors.green}
    }
  }
`

const ComposerText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.grey};
`


export default function Sidebar({ country, setTrack }) {
  const history = useHistory()
  const onSelectCountry = (e) => {
    switch (e.target.value) {
    case '-----':
      history.push('/')
      break
    default:
      Object.entries(countries).forEach(([ key, country ]) => {
        if (country.name === e.target.value) {
          history.push(country.url)
          return
        }
      })
      break
    }
  }
  return (
    <SideFlex>
      {country &&
        <Box>
          <Label htmlFor='country'></Label>
          <PrettySelect
            id='country'
            name='country'
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            >
            <option key='empty'></option>
            {Object.entries(countries).map(([ key, country ]) => (
              <option
                key={key}>
                {country.name}
              </option>
            ))}
            >
          </PrettySelect>
        </Box>
      }
      <Title>
        {country? countries[country].name : 'Voyager Golden Record'}
      </Title>
      {!country &&
        <Box
          >
          <PrettySelect
            id='country'
            name='country'
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            >
            <option key='empty'>Start Exploring...</option>
            {Object.entries(countries).map(([ key, country ]) => (
              <option
                key={key}>
                {country.name}
              </option>
            ))}
            >
          </PrettySelect>
        </Box>
      }
      <Subtitle>
        {country? '' : 'About This Map'}
      </Subtitle>
      {country?
        <PlayList>
          {
            countries[country].tracks.map((track, i) => {
              const trackData = music[track-1]
              return (
                <TrackText
                  key={track-1}
                  >
                  <Link
                    onClick={() => setTrack(music[track-1])}
                    >
                    {i+1}. {trackData.Piece}
                  </Link>
                  <ComposerText>{trackData.Composer}</ComposerText>
                </TrackText>
              )
            })
          }
        </PlayList>
        :
        <>
          <PrettyText
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Pretium quam vulputate dignissim suspendisse in est ante in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Luctus venenatis lectus magna fringilla urna porttitor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec enim diam vulputate ut pharetra. Feugiat scelerisque varius morbi enim nunc faucibus a. Metus vulputate eu scelerisque felis imperdiet. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Eros in cursus turpis massa tincidunt.

          Mattis rhoncus urna neque viverra justo. Eu nisl nunc mi ipsum faucibus. Sodales ut etiam sit amet nisl purus in mollis nunc. Vel pretium lectus quam id. Massa massa ultricies mi quis. Quam vulputate dignissim suspendisse in est ante in nibh. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis leo vel. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Amet aliquam id diam maecenas. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non odio euismod lacinia at quis. Laoreet id donec ultrices tincidunt arcu non sodales.
        </PrettyText>
      </>
    }
    </SideFlex>
  )
}
