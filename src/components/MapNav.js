import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  Button,
  Flex,
  Text
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
  height: 50px;
  width: auto;
`
const GlobeButton = styled(Button)`
  width: 24px;
  height: 24px;
  padding: 0;
  cursor: pointer;
  background: none;
`

const LArrowButton = styled(Flex)`
  width: 80px;
  height: auto;
  padding: 0px;
  cursor: pointer;
  justify-content: flex-end;
`

const RArrowButton = styled(Flex)`
  width: 80px;
  height: auto;
  padding: 0px;
  cursor: pointer;
  justify-content: flex-start;
`


const SArrowLeft = styled(ArrowLeft)`
  width: 27px;
  height: 38px;
`

const SArrowRight = styled(ArrowRight)`
  width: 27px;
  height: 38px;
`

const ToolTipLeft = styled(Text)`
  color: ${props => props.theme.colors.black};
  margin-right: 10px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 700;
  letter-spacing: 0.5px;
`

const ToolTipRight = styled(Text)`
  color: ${props => props.theme.colors.black};
  margin-left: 10px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 700;
  letter-spacing: 0.5px;

`



export default function MapNav({ setTrack, setPlaying }) {
  const history = useHistory()
  const location = useLocation()

  const [lHover, setLHover] = useState(false)
  const [rHover, setRHover] = useState(false)

  const leftarrow = lHover ? <ToolTipLeft>back</ToolTipLeft> : <SArrowLeft/>
  const rightarrow = rHover ? <ToolTipRight>next</ToolTipRight> : <SArrowRight/>

  const moveLeft = () => {
    if (location.pathname === '/') {
      setTrack(music[15])
      setPlaying(false)
      history.push('/ussr')
      return
    }
    const order = Object.entries(countries)
    order.forEach(([country, data], i) => {
      if (location.pathname === data.url) {
        if (i !== 0) {
          const next = order[i-1][1].url
          setTrack(music[(countries[order[i-1][0]].tracks[0])-1])
          setPlaying(false)
          history.push(next)
        } else {
          const next = order[order.length-1][1].url
          setTrack(music[(countries[order[order.length-1][0]].tracks[0])-1])
          setPlaying(false)
          history.push(next)
        }
      }
    })
  }

  const moveRight = () => {
    if (location.pathname === '/') {
      setTrack(music[7])
      setPlaying(false)
      history.push('/usa')
      return
    }
    const order = Object.entries(countries)
    order.forEach(([country, data], i) => {
      if (location.pathname === data.url) {
        if (i < order.length-1) {
          const next = order[i+1][1].url
          setTrack(music[(countries[order[i+1][0]].tracks[0])-1])
          setPlaying(false)
          history.push(next)
        } else {
          const next = order[0][1].url
          setTrack(music[(countries[order[0][0]].tracks[0])-1])
          setPlaying(false)
          history.push(next)
        }
      }
    })
  }

  return (
    <NavContainer>
      <LArrowButton
        onClick={moveLeft}
        onMouseEnter={()=>setLHover(true)}
        onMouseLeave={()=>setLHover(false)}
        >
        {leftarrow}
      </LArrowButton>
      <GlobeButton
        onClick={() => {history.push('/');setPlaying(false)}}
        >
        <Globe />
      </GlobeButton>
      <RArrowButton
        onClick={moveRight}
        onMouseEnter={()=>setRHover(true)}
        onMouseLeave={()=>setRHover(false)}
        >
        {rightarrow}
      </RArrowButton>
    </NavContainer>
  )
}
