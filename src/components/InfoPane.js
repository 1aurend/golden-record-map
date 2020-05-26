import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Flex
} from 'rebass'

const Pane = styled(Flex)`
  width: 75vw;
  height: 25vh;
  background: white;
  transition: height 2s;

  &:hover {
    height: 25vh;
    color: blue;
  }
`

export default function InfoPane() {
  return (
    <Pane>
      <h2>detail pane</h2>
    </Pane>
  )
}
