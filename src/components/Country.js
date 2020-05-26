import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import MapNav from './MapNav'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'


export default function Country({ country }) {
  const [height, setHeight] = useState('100vh')
  useEffect(() => {
    const delay = setTimeout(() => {
      setHeight('65vh')
    }, 200)
    return () => clearTimeout(delay)
  }, [])
  return (
    <>
    <Flex
      width={'100vw'}
      >
      <Box>
        <Map height={height}/>
      </Box>
    {/*  <MapNav /> */}
      <Box>
        <Sidebar country={country}/>
      </Box>
    </Flex>
    <InfoPane />
    </>
  )
}
