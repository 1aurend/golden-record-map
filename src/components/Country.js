import React from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'


export default function Country({ country }) {
  return (
    <Flex
      width={'100vw'}
      >
      <Box>
        <Map />
      </Box>
    {/*  <MapNav /> */}
      <Box>
        <Sidebar country={country}/>
      </Box>
    </Flex>
  )
}
