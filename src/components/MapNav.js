import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Flex,
  Box
} from 'rebass'
import { useHistory } from 'react-router-dom'
import globeIcon from '../assets/globe_icon.svg'
import arrowIcon from '../assets/left-arrow.svg'


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

export default function MapNav() {
  const history = useHistory()

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
        <Arrow>
          <img
            src={arrowIcon}
            alt='arrow-left'
            width='30px'
            style={{display: 'block'}}
            />
        </Arrow>
        <Arrow>
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
