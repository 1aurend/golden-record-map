import React from 'react'
import {
  Flex,
  Box,
  Text,
  Button
} from 'rebass'
import {isSafari, isMobileOnly} from 'react-device-detect'
import recordPngC from '../assets/recordC.png'

export default function Splash(props) {
  return (
    <>
      <Box
        sx = {{
        width:'100%',
        height:'100%',
        bg:'black',
        mixBlendMode:'hue',
        zIndex:'2',
        position:'absolute'}}/>
      <Flex
        sx={{
          width:'100%',
          height:'100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            height: '75vmin',
            width: '45vmin',
            backgroundSize: 'cover',
            backgroundImage: `url(${recordPngC})`,
            zIndex:'3'
          }}
        />
        <Flex
          sx={{
            height: 'auto',
            width: '45vmin',
            flexDirection:'column',
            justifyContent:'center',
            zIndex:'3'
          }}
        >
          <Text
            sx={{
              fontFamily: 'heading',
              fontSize: '7vmin',
              lineHeight: '8vmin',
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              textShadow: '0.25vmin 0.25vmin 2vmin black',
            }}
          >Voyager Golden Record
          </Text>
          <Text
            sx={{
              fontFamily: 'body',
              fontSize: ['3vmin','2.5vmin','1.75vmin'],
              lineHeight: ['4vmin','3.5vmin','3vmin'],
              color: 'white',
              textAlign: 'center',
              marginTop:'3vmin'
            }}
          >In 1977 NASA shot the Golden Record into outer space, as part of the Voyager space mission. The record contained music in different genres from all over the world. Mouse over this map of the world to see where the pieces come from, and click on the titles to listen to the music.
          </Text>
          <Text
            sx={{
              fontFamily: 'body',
              fontSize: ['3vmin','2.5vmin','1.75vmin'],
              lineHeight: ['4vmin','3.5vmin','3vmin'],
              color: 'gold',
              textAlign: 'center',
              marginTop:'3vmin'
            }}
          >
            {isMobileOnly ? 'Please rotate your device to landscape mode.':''}
            {isSafari ? ' Use Chrome or Firefox for the best experience.':''}
          </Text>
          <Button
            onClick={()=>props.setSplash(false)}
            sx={{
              fontFamily: 'body',
              fontSize: ['3vmin','2.5vmin','2vmin'],
              color: 'gold',
              textAlign: 'center',
              marginTop:'3vmin',
              background: 'none',
              border: '2px solid',
              borderRadius: '0',
              cursor: 'pointer'
            }}
          >
            Start Exploring...
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
