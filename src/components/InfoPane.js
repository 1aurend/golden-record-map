import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'rebass'
import RecordPlayer from './RecordPlayer'


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
const ContentBox = styled(Flex)`
  width: 55vw;
  flex-direction: row;
  justify-content: flex-start;
`
const TrackInfo = styled(Flex)`
  flex-direction: column;
`


export default function InfoPane({ mapHeight, track }) {
  return (
    <Pane mapHeight={mapHeight}>
      <ContentBox>
        <RecordPlayer track={track} />
        <TrackInfo>
          <Heading
            fontFamily='sans-serif'
            pb={2}
            >
            {track.Piece}
          </Heading>
          {
            Object.entries(track)
            .filter(([key, value]) => {return key !== 'Country' && key !== 'Piece'})
            .map(([key, value]) => {
              return <Text pb={2} fontSize={16}>{key}: {value}</Text>
            })
          }
        </TrackInfo>
      </ContentBox>
    </Pane>
  )
}
