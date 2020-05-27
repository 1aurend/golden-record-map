import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'


export default function Country({ country, mapHeight, setMapHeight }) {
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
      <Box>
        <Map height={mapHeight} highlight={country}/>
        <InfoPane mapHeight={mapHeight} country={country}/>
      </Box>
    {/*  <MapNav /> */}
      <Box>
        <Sidebar country={country}/>
      </Box>
    </Flex>
    </>
  )
}
