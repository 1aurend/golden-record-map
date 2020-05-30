import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Flex,
  Box
} from 'rebass'
import { useHistory, useLocation } from 'react-router-dom'
import { ReactComponent as Globe } from '../assets/nav_globe.svg'
import { ReactComponent as ArrowLeft } from '../assets/nav_larrow.svg'
import { ReactComponent as ArrowRight } from '../assets/nav_rarrow.svg'
import countries from '../countries'
import music from '../music'


const NavContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  height: 38px;
  width: auto;
  margin: 20px;
`
const GlobeButton = styled(Button)`
  width: 38px;
  height: 38px;
  padding: 0;
  cursor: pointer;
  background: none;
`

const ArrowButton = styled(Button)`
  width: 17px;
  height: 38px;
  padding: 0;
  cursor: pointer;
  background: none;
`


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
      <ArrowButton
        onClick={moveLeft}
        >
        <ArrowLeft />
      </ArrowButton>
      <GlobeButton
        onClick={() => history.push('/')}
        >
        <Globe />
      </GlobeButton>
      <ArrowButton
        onClick={moveRight}
        >
        <ArrowRight />
      </ArrowButton>
    </NavContainer>
  )
}
