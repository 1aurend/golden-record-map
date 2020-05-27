import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'


export default function World() {
  const [height, setHeight] = useState('100vh')
  useEffect(() => {
    const delay = setTimeout(() => {
      setHeight('65vh')
    }, 200)
    return () => clearTimeout(delay)
  }, [])
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
