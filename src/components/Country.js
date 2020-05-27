import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'


export default function Country({ country, mapHeight, setMapHeight, setTrack, currentTrack }) {
  useEffect(() => {
    const delay = setTimeout(() => {
      setMapHeight('65vh')
    }, 200)
    return () => clearTimeout(delay)
  }, [setMapHeight])

  return (
    <>
    <Flex
      width={'100vw'}
      >
      <MapNav />
      <Box>
        <Map height={mapHeight} highlight={country} setTrack={setTrack}/>
        <InfoPane mapHeight={mapHeight} track={currentTrack}/>
      </Box>
      <Box>
        <Sidebar country={country} setTrack={setTrack}/>
      </Box>
    </Flex>
    </>
  )
}
