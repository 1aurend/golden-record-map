import React from 'react'
import {
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'


export default function World() {
  return (
    <Box
      width={'100vw'}
      >
      <Map />
    {/*  <MapNav />
      <Sidebar data={'prop or context?'}/> */}
    </Box>
  )
}
