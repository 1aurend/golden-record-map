import React from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'


export default function World() {
  return (
    <Flex
      width={'100vw'}
      >
      <Box>
        <Map height='100vh'/>
      </Box>
    {/*  <MapNav /> */}
      <Box>
        <Sidebar data={'prop or context?'}/>
      </Box>
    </Flex>
  )
}
