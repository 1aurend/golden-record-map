import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box
} from 'rebass'
import countries from '../countries'
import music from '../music'

const Pane = styled(Flex)`
  width: 75vw;
  height: ${props => props.mapHeight === '65vh' ? '35vh' : 0};
  background: white;
  display: ${props => props.mapHeight === '65vh' ? '' : 'none'};
  transition: height 2s;
  padding-left: 10vh;
  padding-right: 10vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  overflow: scroll;
  justify-content: flex-start;
  flex-direction: column;
`

export default function InfoPane({ mapHeight, country }) {
  return (
    <Pane mapHeight={mapHeight}>
      <Box
        pb={2}
        >
        <h2>Tracks</h2>
      </Box>
      <Box>
        {
          countries[country].tracks.map(track => {
            return (
              <p
                key={track}
                >
                {JSON.stringify(music[track], null, 2)}
              </p>
            )
          })
        }
      </Box>
    </Pane>
  )
}
