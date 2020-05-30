import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Flex,
  Box
} from 'rebass'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Globe } from '../assets/nav_globe.svg'
import { ReactComponent as ArrowLeft } from '../assets/nav_larrow.svg'
import { ReactComponent as ArrowRight } from '../assets/nav_rarrow.svg'


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

export default function MapNav() {
  const history = useHistory()
  return (
    <NavContainer>
      <ArrowButton>
        <ArrowLeft />
      </ArrowButton>
      <GlobeButton
        onClick={() => history.push('/')}
        >
        <Globe />
      </GlobeButton>
      <ArrowButton>
        <ArrowRight />
      </ArrowButton>
    </NavContainer>
  )
}
