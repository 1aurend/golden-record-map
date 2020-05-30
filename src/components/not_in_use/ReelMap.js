import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Flex,
  Box,
  Image
} from 'rebass'
import styled from 'styled-components'
import Svg20200528Map from './20200528map'
import MapMap from './MapMap'


const MapBox = styled(Box)`
  width: 75vw;
  height: 100vh;
`

export default function ReelMap() {
  const [view, setView] = useState([1165, 0, 6975, 4650])
  return (
    <MapBox>
      <MapMap view={view} setView={setView}/>
    </MapBox>
  )
}
