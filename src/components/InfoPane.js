import React from 'react'
import styled from '@emotion/styled'
import {
  Flex,
  Text
} from 'rebass'
import SimplePlayer from './SimplePlayer'
import useAspectRatio from '../useAspectRatio'




export default function InfoPane({ detailVisible, track, setTrack, setPlaying, playing, country }) {
  const layout = useAspectRatio()
  return (
    <Flex
      detailVisible={detailVisible}
      sx={{
        width: layout === 'h' ? '75vw' : '100vw',
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
        alignItems: layout === 'h' ? 'flex-end' : 'center',
        pointerEvents: 'none',
        backgroundColor: 'black',
        padding: '3% 3%',
      }}
      >

      <Flex
        sx={{
          flexDirection: 'column',
          width: layout === 'h' ? '50vw' : '80vw',
          order: layout === 'h' ? 2 : 1,
        }}>
        {
          Object.entries(track)
          .filter(([key, value]) => {return key !== 'Country' && key !== 'Piece' && key !== 'Audio'})
          .map(([key, value]) => {
            return (
              <Flex
                key={key}
                sx={{
                  fontFamily: 'body',
                }}
                >
                <Text
                  sx={{
                    fontSize: ['9px','10px','13px'],
                    lineHeight: ['14px','16px','18px'],
                    textTransform: 'uppercase',
                    letterSpacing:  ['1px','1.25px','1.5px'],
                    color: 'grey',
                    flexBasis: '20%',
                    textAlign: 'right',
                    margin: ['2px 4px','2.5px 5px','3px 6px'],
                  }}
                >
                {key}:
                </Text>
                <Text
                  sx={{
                    fontSize: ['12px','13px','16px'],
                    lineHeight: ['14px','16px','18px'],
                    color: 'white',
                    flexBasis: '80%',
                    margin: ['2px 4px','2.5px 5px','3px 6px'],
                    fontWeight: '400',
                  }}>
                {value}
                </Text>
              </Flex>
            )
          })
        }
      </Flex>
      <Flex
        sx={{
          pointerEvents: 'all',
          order: layout === 'h' ? 1 : 2,
          margin: '0% 3%'
        }}>
        <SimplePlayer
          setPlaying={setPlaying}
          playing={playing}
          country={country}
          track={track}
          setTrack={setTrack}
          />
      </Flex>
    </Flex>
  )
}
