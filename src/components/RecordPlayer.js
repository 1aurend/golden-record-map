import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Flex,
  Box,
  Button,
  Text
} from 'rebass'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'


const Player = styled(Flex)`
  width: 20vw;
  height: 30vh;
  margin-right: 2vw;
  flex-direction: column;
  align-items: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const rotateRecord = css`
  animation: ${rotate} 2s linear infinite;
`
const MockRecord = styled(Box)`
  border: 7vh groove gold;
  border-radius: 100%;
  background: black;
  height: 18vh;
  width: 18vh;
  ${props => props.rotate? rotateRecord : 'animation: none;'};
`
const PlayPause = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  margin-top: 1vh;
  padding: 0;
  height: 3vh;
  width: 4vw;
  cursor: pointer;
`


export default function RecordPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <Player>
      <Text>0:00</Text>
      <MockRecord rotate={isPlaying}/>
      <PlayPause onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying? <PauseIcon /> : <PlayArrowIcon />}
      </PlayPause>
    </Player>
  )
}
