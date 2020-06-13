import React, { useEffect, useState } from 'react'
import {
  Box
} from 'rebass'
import Howler from 'react-howler'
import MapMap from './MapMap'
import Topbar from './Topbar'
import InfoPane from './InfoPane'
import HoverPopup from './Popup'


export default function Interface({ country, detailVisible, setDetailVisible, setTrack, currentTrack, view }) {
  const [popup, setPopup] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!country) {
      setPlaying(false)
      setDetailVisible(false)
      return
    }
    setDetailVisible(true)
  }, [country, setDetailVisible])

  return (
    <Box
      sx = {{
        width:'100vw',
        height:'100vh',
        bg:'black',
        overflow: 'hidden',
      }}
      >
      <Topbar
        country={country}
        setTrack={setTrack}
        setPlaying={setPlaying}
        currentTrack={currentTrack}
        playing={playing}
        />
      <MapMap
        height={detailVisible}
        highlight={country}
        setTrack={setTrack}
        view={view}
        setPopup={setPopup}
        setPlaying={setPlaying}
        country={country}
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
      {currentTrack &&
        <Howler
          src={currentTrack.Audio}
          preload={true}
          html5={true}
          playing={playing}
          />
      }
    </Box>
  )
}
