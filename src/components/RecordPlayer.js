import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Flex,
  Box,
  Button,
} from 'rebass'
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as TrackNext } from '../assets/controls_ntrack.svg'
import { ReactComponent as TrackPrev } from '../assets/controls_ptrack.svg'
import { ReactComponent as PlayOverlay } from '../assets/controls_play_overlay.svg'
import { ReactComponent as PauseOverlay } from '../assets/controls_pause_overlay.svg'
import recordPng from '../assets/record.png'
import music from '../music'
import countries from '../countries'


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


export default function RecordPlayer({ setPlaying, playing, setTrack, country, track }) {
  const location = useLocation()
  const history = useHistory()
  const overlay = playing ? <PauseOverlay/> : <PlayOverlay/>

  const prevTrack = () => {
    const multiTrack = countries[country].tracks.length > 1
    if (multiTrack) {
      const order = countries[country].tracks
      const trackNum = music.indexOf(track)+1
      const currentIndex = order.indexOf(trackNum)
      if (currentIndex !== 0) {
        const nextTrack = order[currentIndex-1]
        setTrack(music[nextTrack-1])
        return
      }
    }
    const order = Object.entries(countries)
    order.forEach(([country, data], i) => {
      if (location.pathname === data.url) {
        if (i !== 0) {
          const next = order[i-1][1].url
          const trackList = countries[order[i-1][0]].tracks
          setTrack(music[(countries[order[i-1][0]].tracks[trackList.length-1])-1])
          history.push(next)
        } else {
          const next = order[order.length-1][1].url
          const trackList = countries[order[order.length-1][0]].tracks
          setTrack(music[(countries[order[order.length-1][0]].tracks[trackList.length-1])-1])
          history.push(next)
        }
      }
    })
  }

  const nextTrack = () => {
    const multiTrack = countries[country].tracks.length > 1
    if (multiTrack) {
      const order = countries[country].tracks
      const trackNum = music.indexOf(track)+1
      const currentIndex = order.indexOf(trackNum)
      if (currentIndex !== order.length-1) {
        const nextTrack = order[currentIndex+1]
        setTrack(music[nextTrack-1])
        return
      }
    }
    const order = Object.entries(countries)
    order.forEach(([country, data], i) => {
      if (location.pathname === data.url) {
        if (i < order.length-1) {
          const next = order[i+1][1].url
          setTrack(music[(countries[order[i+1][0]].tracks[0])-1])
          history.push(next)
        } else {
          const next = order[0][1].url
          setTrack(music[(countries[order[0][0]].tracks[0])-1])
          history.push(next)
        }
      }
    })
  }


  return (
    <ControlsFlex>
      <Skip onClick={prevTrack}><TrackPrev/></Skip>
      <PlayPause onClick={() => {setPlaying(!playing)}}>
          <Record rotate={playing}>{overlay}</Record>
      </PlayPause>
      <Skip onClick={nextTrack}><TrackNext/></Skip>
    </ControlsFlex>
  )
}
