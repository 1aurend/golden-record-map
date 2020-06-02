import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Text
} from 'rebass'
import RecordPlayer from './RecordPlayer'
import MapNav from './MapNav'


const Pane = styled(Flex)`
  width: 75vw;
  height: auto;
  position: fixed;
  bottom: 0px;
  transition: transform 0.75s ease-in;
  transform: ${props => props.mapHeight === '65vh' ? 'translateY(0px)' : 'translateY(400px)'};
  transform-origin: bottom;
  overflow: hidden;
  flex-direction: row;
  z-index: 99;
  justify-content: flex-start;
  align-items: flex-end;
  pointer-events: none;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9), rgba(0,0,0,1));
  padding-top: 10px;
  padding-bottom: 50px;
`

const ControlsFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0px 40px 0px 100px;
  margin-bottom: 10px;
  width: 300px;
  pointer-events: all;
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
  line-height: 36px;
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
  flex-basis: 20%;
  text-align: right;
`

const DataValue = styled(Text)`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  flex-basis: 80%;
`


export default function InfoPane({ mapHeight, track, setTrack }) {
  return (
    <Pane mapHeight={mapHeight}>
      <ControlsFlex>
        <MapNav setTrack={setTrack}/>
        <RecordPlayer track={track.Audio} />
      </ControlsFlex>
      <TrackInfo>
        <TrackTitle>
          {track.Piece}
        </TrackTitle>
        {
          Object.entries(track)
          .filter(([key, value]) => {return key !== 'Country' && key !== 'Piece' && key !== 'Audio'})
          .map(([key, value]) => {
            return (
              <DataBox
                key={key}
                >
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
