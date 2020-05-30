import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'rebass'
import RecordPlayer from './RecordPlayer'
import MapNav from './MapNav'


const Pane = styled(Flex)`
  width: 75vw;
  height: 280px;
  position: fixed;
  bottom: ${props => props.mapHeight === '65vh' ? '60px' : '-200px'};*/}
  transition: height 2s;
  overflow: hidden;
  flex-direction: row;
  z-index: 99;
  justify-content: flex-start;
  align-items: flex-end;
`

const ControlsFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0px 40px 0px 100px;
  margin-bottom: 10px;
`

const TrackInfo = styled(Flex)`
  flex-direction: column;
  width: 35vw;
`

const TrackTitle = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.gold};
  letter-spacing: 0.5px;
  font-size: 32px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`

const DataBox = styled(Flex)`
  font-family: ${props => props.theme.fonts.body};
  flex-direction: row;
  > *{
    margin: 3px 6px;
  }
`

const DataKey = styled(Text)`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.grey};
  flex-basis: 250px;
  text-align: right;
`

const DataValue = styled(Text)`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  flex-basis: 600px;
`


export default function InfoPane({ mapHeight, track }) {
  return (
    <Pane mapHeight={mapHeight}>
      <ControlsFlex>
        <MapNav />
        <TrackTitle>
          {track.Piece}
        </TrackTitle>
        <RecordPlayer track={track} />
      </ControlsFlex>
      <TrackInfo>
        {
          Object.entries(track)
          .filter(([key, value]) => {return key !== 'Country' && key !== 'Piece'})
          .map(([key, value]) => {
            return (
              <DataBox>
                <DataKey>{key}:</DataKey>
                <DataValue>{value}</DataValue>
              </DataBox>
            )
          })
        }
      </TrackInfo>
    </Pane>
  )
}
