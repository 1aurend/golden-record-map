import React, { useEffect, useState } from 'react'
import {
  Flex
} from 'rebass'
import Howler from 'react-howler'
import MapMap from './MapMap'
import Sidebar from './Sidebar'
import InfoPane from './InfoPane'
import HoverPopup from './Popup'
import useAspectRatio from '../useAspectRatio'


export default function Interface({ country, detailVisible, setDetailVisible, setTrack, currentTrack, view }) {
  const [popup, setPopup] = useState(null)
  const [playing, setPlaying] = useState(false)
  const layout = useAspectRatio()
  const flexDir = layout === 'h' ? 'row' : 'column'

  // const [flexDir, setFlexDir] = useState(null)
  //
  // useEffect(() => {
  //   if (layout) {
  //     setFlexDir('column')
  //   }
  //   else {
  //     setFlexDir('row')
  //   }
  // })

  useEffect(() => {
    if (!country) {
      setPlaying(false)
      setDetailVisible(false)
      return
    }
    setDetailVisible(true)
  }, [country, setDetailVisible])

  return (
    <Flex
      sx = {{
        width:'100vw',
        height:'100vh',
        bg:'black',
        flexDirection:flexDir,
        overflow: 'hidden',
      }}
      >
      <MapMap
        height={detailVisible}
        highlight={country}
        setTrack={setTrack}
        view={view}
        setPopup={setPopup}
        setPlaying={setPlaying}
        />
      {country &&
        <InfoPane
          detailVisible={detailVisible}
          track={currentTrack}
          setTrack={setTrack}
          setPlaying={setPlaying}
          playing={playing}
          country={country}
          />
      }
      {!country &&
        <HoverPopup
          country={popup}
          setTrack={setTrack}
          />
      }
      <Sidebar
        country={country}
        setTrack={setTrack}
        setPlaying={setPlaying}
        currentTrack={currentTrack}
        />
      {currentTrack &&
        <Howler
          src={currentTrack.Audio}
          preload={true}
          html5={true}
          playing={playing}
          />
      }
    </Flex>
  )
}
