<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box
} from 'rebass'
import Map from './Map'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'
=======
import React from 'react'
import styled from 'styled-components'
>>>>>>> a8b8d0dd60da3d9ce4ef9fcbe797d7e09a7ea080

const StyledGroup = styled.g`
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  &:hover {
    fill: #ec8148;
  }
`

export default function Country({ onClick, fill, path, id }) {
  return (
<<<<<<< HEAD
    <>
    <Flex
      width={'100vw'}
      bg='black'
      >
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
=======
    <StyledGroup id={id} onClick={() => onClick(id)} fill={fill}>
      <path d={path} />
      </StyledGroup>
    )
  }
>>>>>>> a8b8d0dd60da3d9ce4ef9fcbe797d7e09a7ea080
