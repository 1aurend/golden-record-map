import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Text
} from 'rebass'
import {
  Link,
  useHistory
} from 'react-router-dom'
import styled from 'styled-components'
import music from '../music'
import countries from '../countries'
import pointer from '../assets/pointer.svg'



const HoverFlex = styled(Flex)`
  position: fixed;
  flex-direction: row;
  z-index: 50;
  display: ${props => props.country ? '' : 'none'}
  width: auto;
`

const PointerBox = styled(Box)`
  background-image: url(${pointer});
  width: 36px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
`

const InfoBox = styled(Box)`
  width: auto;
  font-family: ${props => props.theme.fonts.body};
  margin-top: -12px;
  text-shadow: 1px 1px 3px ${props => props.theme.colors.black}
`

const CountryText = styled(Text)`
  text-align: left;
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 15px;

`

const TrackText = styled(Text)`
  padding: 0.5px 15px;
  text-align: left;
  > a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: ${props => props.theme.colors.gold};
  }
`




export default function HoverPopup({ country, setTrack }) {
  const history = useHistory()

  const [position, setPosition] = useState({posX:null, posY:null})
  const getMousePosition = e => {
    setPosition({posX:e.clientX,posY:e.clientY})
  }
  useEffect(()=>{
    window.addEventListener("mousemove",getMousePosition);
    return()=>window.removeEventListener("mousemove",getMousePosition);
    },[])

  if (country) {
    return (
      <HoverFlex
        sx={{
          top:position.posY-25,
          left:position.posX+5
        }}
        country={country}
        >
        <PointerBox></PointerBox>
        <InfoBox
          m={1}
          p={1}
          textAlign='left'
          >
          <CountryText>{countries[country].name}</CountryText>
          {
            countries[country].tracks.map((track, i) => {
              const trackData = music[track-1]
              return (
                <TrackText
                  key={track-1}
                  >
                  <Link
                    onClick={() => {
                      setTrack(music[track-1])
                      history.push(countries[country].url)
                    }}
                    >
                    {trackData.Piece}
                  </Link>
                </TrackText>
              )
            })
          }
        </InfoBox>
      </HoverFlex>
    )
  } else {
    return null
  }

  }
