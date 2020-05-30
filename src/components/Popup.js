import React, { useState, useEffect } from 'react'
import {
  Box,
  Text
} from 'rebass'
import {
  Link,
  useHistory
} from 'react-router-dom'
import styled from 'styled-components'
import music from '../music'
import countries from '../countries'

const HoverBox = styled(Box)`
  position: fixed;
  z-index: 50;
  background-color: none;
  display: ${props => props.country ? '' : 'none'}
  border-radius: 8px;
  width: 8vw;
  boxShadow: 0px 3px 8px #A9A9A9;
  background: white;
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
      <HoverBox
        sx={{
          top:position.posY+5,
          left:position.posX+5
        }}
        country={country}
        >
        <Box
          m={1}
          p={1}
          textAlign='left'
          >
          {
            countries[country].tracks.map((track, i) => {
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
                      history.push(countries[country].url)
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
      </HoverBox>
    )
  } else {
    return null
  }

  }
