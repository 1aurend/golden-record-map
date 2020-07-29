import React, { useEffect, useState } from 'react'
import {
  Box
} from 'rebass'
import Howler from 'react-howler'
import {isMobile} from 'react-device-detect'
import useAspectRatio from '../useAspectRatio'
import MapMap from './MapMap'
import Topbar from './Topbar'
import Splash from './Splash'
import InfoPane from './InfoPane'
import HoverPopup from './Popup'


export default function Interface(props) {
  const {
    country,
    detailVisible,
    setDetailVisible,
    setTrack,
    currentTrack,
    view,
    playing,
    setPlaying
  } = props
  const [popup, setPopup] = useState(null)
  const layout = useAspectRatio()[0]

  useEffect(() => {
    if (!country) {
      setPlaying(false)
      setDetailVisible(false)
      return
    }
    setDetailVisible(true)
  }, [country, setDetailVisible, setPlaying])

  return (
    <Box
      sx = {{
        width: '100vw',
        height: '100vh',
        bg:'black',
        overflow: 'hidden',
      }}
      >
      {props.splash
        ? <Splash setSplash={props.setSplash}/>
        : <Topbar
          country={country}
          setTrack={setTrack}
          setPlaying={setPlaying}
          currentTrack={currentTrack}
          playing={playing}
          />
      }
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
      {!country && !isMobile &&
        <HoverPopup
          country={popup}
          setTrack={setTrack}
          />
      }
      {false &&
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
