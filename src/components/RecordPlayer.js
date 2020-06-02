import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Flex,
  Box,
  Button,
} from 'rebass'
import useSound from 'use-sound'
import { useLocation } from 'react-router-dom'
import { ReactComponent as TrackNext } from '../assets/controls_ntrack.svg'
import { ReactComponent as TrackPrev } from '../assets/controls_ptrack.svg'
import { ReactComponent as PlayOverlay } from '../assets/controls_play_overlay.svg'
import { ReactComponent as PauseOverlay } from '../assets/controls_pause_overlay.svg'
import recordPng from '../assets/record.png'
import { IsPlaying, SetPlaying } from '../App.js'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const rotateRecord = css`
  animation: ${rotate} 10s linear infinite;
`

const ControlsFlex = styled(Flex)`
  flex-direction: row;
  align-items: center;
`

const Skip = styled(Button)`
  height: 32px;
  width: 24px;
  cursor: pointer;
  background: none;
  padding: 5px;
`

const Record = styled(Box)`
  height: 120px;
  width: 120px;
  ${props => props.rotate? rotateRecord : 'animation: none;'};
  background-size: cover;
  background-image: url(${recordPng});
`
const PlayPause = styled(Button)`
  height: auto;
  width: auto;
  cursor: pointer;
  background: none;
  padding: 0px;
  margin: 10px;
`


export default function RecordPlayer({ play, stop }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const location = useLocation()
  const overlay = isPlaying ? <PauseOverlay/> : <PlayOverlay/>

  useEffect(() => {
    stop()
    setIsPlaying(false)
  }, [location.pathname, stop])

  const onPlay = () => {
    if (isPlaying) {
      stop()
      setIsPlaying(false)
      return
    }
    play()
    setIsPlaying(true)
  }

  return (
    <ControlsFlex>
      <Skip><TrackPrev/></Skip>
      <PlayPause onClick={onPlay}>
          <Record rotate={isPlaying}>{overlay}</Record>
      </PlayPause>
      <Skip><TrackNext/></Skip>
    </ControlsFlex>
  )
}
