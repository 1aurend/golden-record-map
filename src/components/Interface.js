import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import MapMap from './MapMap'
import MapNav from './MapNav'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'
import HoverPopup from './Popup'


export default function Interface({ country, mapHeight, setMapHeight, setTrack, currentTrack, view }) {
  const [popup, setPopup] = useState(null)

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
      <MapNav setTrack={setTrack}/>
      <Box>
        <MapMap height={mapHeight} highlight={country} setTrack={setTrack} view={view} setPopup={setPopup}/>
        {country && <InfoPane mapHeight={mapHeight} track={currentTrack}/>}
        {!country && <HoverPopup country={popup} setTrack={setTrack} />}
      </Box>
      <Box>
        <Sidebar country={country} setTrack={setTrack}/>
      </Box>
    </Flex>
  )
}
