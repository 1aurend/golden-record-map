import React, { useEffect } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import MapMap from './MapMap'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'


export default function Interface({ country, mapHeight, setMapHeight, setTrack, currentTrack }) {
  useEffect(() => {
    if (mapHeight !== '100vh' && !country) {
      const delay = setTimeout(() => {
        setMapHeight('100vh')
      }, 200)
      return () => clearTimeout(delay)
    } else if (country) {
      const delay = setTimeout(() => {
        setMapHeight('65vh')
      }, 200)
      return () => clearTimeout(delay)
    }
  }, [setMapHeight, mapHeight, country])

  return (
    <Flex
      width={'100vw'}
      bg='black'
      >
      <Box>
        <MapMap height={mapHeight} highlight={country} setTrack={setTrack}/>
        {country && <InfoPane mapHeight={mapHeight} track={currentTrack}/>}
      </Box>
      <Box>
        <Sidebar country={country} setTrack={setTrack}/>
      </Box>
    </Flex>
  )
}
