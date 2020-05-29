import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'
import ReelMap from './ReelMap'


export default function World({ mapHeight, setMapHeight, setTrack }) {
  useEffect(() => {
    if (mapHeight !== '100vh') {
      const delay = setTimeout(() => {
        setMapHeight('100vh')
      }, 200)
      return () => clearTimeout(delay)
    }
  }, [setMapHeight, mapHeight])

  return (
    <Flex
      width={'100vw'}
      >
      <MapNav />
      <Box>
      <Map height={mapHeight} setTrack={setTrack}/>
        {/*<ReelMap />*/}
      </Box>
      <Box>
        <Sidebar data={'prop or context?'}/>
      </Box>
    </Flex>
  )
}
