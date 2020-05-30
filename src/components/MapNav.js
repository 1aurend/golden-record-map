import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Flex,
  Box
} from 'rebass'
import { useHistory, useLocation } from 'react-router-dom'
import globeIcon from '../assets/globe_icon.svg'
import arrowIcon from '../assets/left-arrow.svg'
import countries from '../countries'
import music from '../music'


const NavContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 6vw;
  height: 6vw;
  position: fixed;
  left: 3vw;
  top: 4vw;
`
const GlobeButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 3vw;
  height: 3vw;
  background: none;
  padding: 0;
  cursor: pointer;
`
const ArrowButtons = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 6vw;
  height: 3vw;
  background: none;
  padding: 0;
  cursor: pointer;
`
const Arrow = styled(Button)`
  display: block;
  padding: 0;
  background: none;
  cursor: pointer;
`

// TODO: Add onClick for arrows!
//
export default function MapNav({ setTrack }) {
  const history = useHistory()
  const location = useLocation()

  const moveLeft = () => {
    if (location.pathname === '/') {
      setTrack(music[15])
      history.push('/ussr')
      return
    }
    const order = Object.entries(countries)
    order.forEach(([country, data], i) => {
      if (location.pathname === data.url) {
        if (i !== 0) {
          const next = order[i-1][1].url
          setTrack(music[(countries[order[i-1][0]].tracks[0])-1])
          history.push(next)
        } else {
          const next = order[order.length-1][1].url
          setTrack(music[(countries[order[order.length-1][0]].tracks[0])-1])
          history.push(next)
        }
      }
    })
  }

  const moveRight = () => {
    if (location.pathname === '/') {
      setTrack(music[7])
      history.push('/usa')
      return
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
    <NavContainer>
      <GlobeButton
        onClick={() => history.push('/')}
        >
        <img
          src={globeIcon}
          alt='globe-icon'
          style={{display: 'block'}}
          />
      </GlobeButton>
      <ArrowButtons>
        <Arrow
          onClick={moveLeft}
          >
          <img
            src={arrowIcon}
            alt='arrow-left'
            width='30px'
            style={{display: 'block'}}
            />
        </Arrow>
        <Arrow
          onClick={moveRight}
          >
          <img
            src={arrowIcon}
            alt='right-left'
            width='30px'
            style={{display: 'block', transform: 'rotate(180deg)'}}
            />
        </Arrow>
      </ArrowButtons>
    </NavContainer>
  )
}
