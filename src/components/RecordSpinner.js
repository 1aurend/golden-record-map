import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes} from '@emotion/core'
import {
  Flex,
  Box,
  Button,
  Text,
} from 'rebass'
import useAspectRatio from '../useAspectRatio'
import recordPngA from '../assets/recordA.png'
import recordPngB from '../assets/recordB.png'
import countries from '../countries'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const rotateRecord = css`
  animation: ${rotate} 10s linear infinite;
`


const Record = styled(Box)`
  height: 50vmin;
  width: 50vmin;
  ${props => props.rotate? rotateRecord : 'animation: none;'};
  background-size: cover;
  background-image: url(${recordPngB});
`


export default function RecordSpinner({ playing, country}) {
  const [layout, dimensions] = useAspectRatio()
  return (
    <Box
      sx={{
        height: layout === 'h' ? '50vmin' : '25vmin',
        width: layout === 'h' ? '25vmin' : '50vmin',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
      <Record
        rotate={playing}
        sx={{
          marginTop: layout === 'h' ? '0' : '-25vmin',
        }}
        />
      <Text
          sx={{
            fontFamily: 'heading',
            fontSize: '7vmin',
            lineHeight: '8vmin',
            fontWeight: '700',
            textAlign: layout === 'h' ? 'right': 'center',
            color: 'white',
            textShadow: '0.25vmin 0.25vmin 2vmin black',
            position: 'absolute',
            pointerEvents: 'none',
            top: layout === 'h' ? '25%' : '25%',
            left: layout === 'h' ? 'auto' : '-50%',
            right: layout === 'h' ? '20%' :'-50%',
          }}>{country? countries[country].name : 'Voyager Golden Record'}
        </Text>
    </Box>
  )
}
