import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Flex,
  Box,
  Image
} from 'rebass'
import {
  Map,
  Marker,
  Popup,
  TileLayer
} from 'react-leaflet'
import styled from 'styled-components'
import Svg20200528Map from '../assets/20200528map'

const MapBox = styled(Box)`
  min-width: 75vw;
  height: 100vh;
`

const zoomAll = [1165, 0, 6975, 4650]

export default function ReelMap() {
  return (
    <MapBox>
      <Svg20200528Map view={zoomAll}/>
    </MapBox>
  )
}
