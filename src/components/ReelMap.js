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

const all = [1165, 0, 6975, 4650]
const india = [1100, 1000, 3600, 2700]
const china= [1700, 800, 3600, 2700]
const solomonislands= [3300, 2400, 2400, 1800]
const bulgaria= [1300, 250, 2400, 1800]
const azerbaijan= [1500, 600, 2400, 1800]
const peru= [5500, 700, 3600, 2700]
const georgia= [1475, 550, 2400, 1800]
const belgium= [1300, 50, 2400, 1800]
const japan= [2150, 850, 3600, 2700]
const papuanewguinea= [2300, 1925, 3600, 2700]
const usa= [3900, 600, 3600, 2700]
const mexico= [4500, 750, 3600, 2700]
const australia= [1950, 1925, 3600, 2700]
const indonesia= [1750, 1800, 3600, 2700]
const drc= [120, 675, 3000, 2250]
const benin= [250, 200, 2400, 1800]
const austria= [1300, 100, 2400, 1800]
const uk= [1400, 0, 2400, 1800]
const germany= [1375, 50, 2400, 1800]
const ussr= [1750, 0, 4000, 3000]

export default function ReelMap() {
  return (
    <MapBox>
      <Svg20200528Map view={all}/>
    </MapBox>
  )
}
