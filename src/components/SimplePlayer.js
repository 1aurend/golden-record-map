import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes} from '@emotion/core'
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
import music from '../music'
import countries from '../countries'
import useAspectRatio from '../useAspectRatio'



const STrackNext = styled(TrackNext)`
  &:hover{
    filter: hue-rotate(137deg) brightness(0.72) saturate(1.18)
  }
`

const STrackPrev = styled(TrackPrev)`
  &:hover{
    filter: hue-rotate(137deg) brightness(0.72) saturate(1.18)
  }
`

const SPlayOverlay = styled(PlayOverlay)`
  &:hover{
    filter: hue-rotate(137deg) brightness(0.72) saturate(1.18)
  }
`

const SPauseOverlay = styled(PauseOverlay)`
  &:hover{
    filter: hue-rotate(137deg) brightness(0.72) saturate(1.18)
  }
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
  animation: ${rotate} 10s linear infinite;
`

const ControlsFlex = styled(Flex)`
  flex-direction: row;
  align-items: center;
`

const Skip = styled(Button)`
  cursor: pointer;
  background: none;
  padding: 3px;
`

const PlayPause = styled(Button)`
  cursor: pointer;
  background: none;
  padding: 0px;
`


export default function RecordPlayer({ setPlaying, playing, setTrack, country, track }) {
  const location = useLocation()
  const layout = useAspectRatio()
  const history = useHistory()
  const overlay = playing ? <SPauseOverlay/> : <SPlayOverlay/>

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
      <Skip
        sx={{
          height: layout === 'h' ? ['8vh', '6vh', '4vh'] : ['8vw', '6vw', '5vw'],
          width: layout === 'h' ? ['6vh', '4.5vh', '3vh'] : ['6vw', '4.5vw', '3.75vw']
        }}
        onClick={prevTrack}><STrackPrev/></Skip>
      <PlayPause
        sx={{
          height: layout === 'h' ? ['15vh', '12vh', '9vh'] : ['18vw', '15vw', '12vw'],
          width: layout === 'h' ? ['15vh', '12vh', '9vh'] : ['18vw', '15vw', '12vw'],
          margin: layout === 'h' ? '1.5vh' : '1.5vw'
        }}
        onClick={() => {setPlaying(!playing)}}>
          {overlay}
      </PlayPause>
      <Skip
        sx={{
          height: layout === 'h' ? ['8vh', '6vh', '4vh'] : ['8vw', '6vw', '5vw'],
          width: layout === 'h' ? ['6vh', '4.5vh', '3vh'] : ['6vw', '4.5vw', '3.75vw']
        }}
        onClick={nextTrack}><STrackNext/></Skip>
    </ControlsFlex>
  )
}
