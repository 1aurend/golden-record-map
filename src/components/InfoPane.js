import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Flex,
  Text
} from 'rebass'
import SimplePlayer from './SimplePlayer'
import useAspectRatio from '../useAspectRatio'




export default function InfoPane({ detailVisible, track, setTrack, setPlaying, playing, country }) {
  const [layout, dimensions] = useAspectRatio()
  return (
    <Flex
      detailVisible={detailVisible}
      sx={{
        width: '100vw',
        height: 'auto',
        position: 'fixed',
        bottom: '0px',
        transition: 'transform 0.75s ease-in',
        transform: detailVisible ? 'translateY(0px)' : 'translateY(400px)',
        transformOrigin: 'bottom',
        overflow: 'hidden',
        flexDirection: layout === 'h' ? 'row' : 'column',
        zIndex: '99',
        justifyContent: 'flex-start',
        alignItems: layout === 'h' ? 'stretch' : 'center',
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9), rgba(0,0,0,1))',
        padding: '2% 3% 3% 3%',
      }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            width: layout === 'h' ? '40vw' : '90vw',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2%'
          }}>
          <Text
            sx={{
              marginBottom: '3%',
              lineHeight: 'auto',
              fontSize: ['5vmin','4.5vmin','4vmin'],
              fontWeight: '700',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'gold'
            }}>{track.Piece}
          </Text>
          <Box
            sx={{pointerEvents: 'all'}}>
            <SimplePlayer
              setPlaying={setPlaying}
              playing={playing}
              country={country}
              track={track}
              setTrack={setTrack}
              />
          </Box>
        </Flex>
        <Box
          sx={{
            fontFamily: 'body',
            display: 'grid',
            gridGap: '1vmin',
            gridTemplateColumns: '1fr 3fr',
            width: layout === 'h' ? '60vw' : '90vw',
          }}
          >
          {
            Object.entries(track)
            .filter(([key, value]) => {return key !== 'Country' && key !== 'Piece' && key !== 'Audio'})
            .map(([key, value]) => {
              return (
                <>
                  <Text
                    sx={{
                      fontSize: ['3vmin','2.5vmin','1.5vmin'],
                      lineHeight: 'auto',
                      textTransform: 'uppercase',
                      letterSpacing:  ['0.5vmin','0.4vmin','0.3vmin'],
                      color: 'grey',
                      textAlign: 'right',
                    }}
                  >
                  {key}:
                  </Text>
                  <Text
                    sx={{
                      fontSize: ['3vmin','2.75vmin','1.5vmin'],
                      lineHeight: 'auto',
                      color: 'white',
                      fontWeight: '400',
                    }}>
                  {value}
                  </Text>
                </>
              )
          })
        }
      </Box>
    </Flex>
  )
}
