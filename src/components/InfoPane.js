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
  width: 35vw;
`

const TrackTitle = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  letter-spacing: 0.5px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`

const DataBox = styled(Flex)`
  font-family: ${props => props.theme.fonts.body};
  flex-direction: row;
  > *{
    margin: 5px 3px;
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
  color: ${props => props.theme.colors.black};
  flex-basis: 500px;
`


export default function InfoPane({ mapHeight, track }) {
  return (
    <Pane mapHeight={mapHeight}>
      <ContentBox>
        <RecordPlayer track={track} />
        <TrackInfo>
          <TrackTitle>
            {track.Piece}
          </TrackTitle>
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
      </ContentBox>
    </Pane>
  )
}
