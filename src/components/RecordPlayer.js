import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Flex,
  Box,
  Button,
  Text,
  Image
} from 'rebass'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import { ReactComponent as Globe } from '../assets/nav_globe.svg'
import { ReactComponent as ArrowLeft } from '../assets/nav_larrow.svg'
import { ReactComponent as ArrowRight } from '../assets/nav_rarrow.svg'
import { ReactComponent as TrackNext } from '../assets/controls_ntrack.svg'
import { ReactComponent as TrackPrev } from '../assets/controls_ptrack.svg'
import { ReactComponent as PlayOverlay } from '../assets/controls_play_overlay.svg'
import { ReactComponent as PauseOverlay } from '../assets/controls_pause_overlay.svg'
import recordPng from '../assets/record.png'


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


export default function RecordPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  if (isPlaying){
    return (
      <ControlsFlex>
        <Skip><TrackPrev/></Skip>
        <PlayPause onClick={() => setIsPlaying(!isPlaying)}>
            <Record rotate={isPlaying}><PauseOverlay/></Record>
        </PlayPause>
        <Skip><TrackNext/></Skip>
      </ControlsFlex>
    )
  }
  else return (
    <ControlsFlex>
      <Skip><TrackPrev/></Skip>
      <PlayPause onClick={() => setIsPlaying(!isPlaying)}>
        <Record rotate={isPlaying}><PlayOverlay/></Record>
      </PlayPause>
      <Skip><TrackNext/></Skip>
    </ControlsFlex>
  )
}
