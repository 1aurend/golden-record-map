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


export default function ReelMap() {
  return <Svg20200528Map />
}
