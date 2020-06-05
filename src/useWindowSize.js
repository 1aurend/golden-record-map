import { useState, useEffect, useLayoutEffect } from 'react'
import * as responsiveStyles from './responsiveStyles'


export default function useResponsiveStyles() {
  const [size, setSize] = useState({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                  })
  const [prevWidth, setPrevWidth] = useState(window.innerWidth)
  const [sizedStyles, setSizedStyles] = useState(chooseSizedStyles(size, true))
  const handleResize = () => {
    if (window.innerWidth === prevWidth) {
      return
    }
    setSize({width: window.innerWidth, height: window.innerHeight})
    setPrevWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  useLayoutEffect(() => {
    chooseSizedStyles(size, false)
  }, [size])

  return sizedStyles
}
