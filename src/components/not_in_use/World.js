import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import Sidebar from './Sidebar'
import MapMap from './MapMap'


export default function World({ detailVisible, setDetailVisible, setTrack }) {
  useEffect(() => {
    if (detailVisible !== '100vh') {
      const delay = setTimeout(() => {
        setDetailVisible('100vh')
      }, 200)
      return () => clearTimeout(delay)
    }
  }, [setDetailVisible, detailVisible])

  return (
    <Flex
      width={'100vw'}
      bg='black'
      >
      <Box>
        <MapMap />
      </Box>
      <Box>
        <Sidebar data={'prop or context?'}/>
      </Box>
    </Flex>
  )
}
