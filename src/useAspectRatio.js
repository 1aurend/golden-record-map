import { useState, useEffect } from 'react'


export default function useAspectRatio() {
  const [dimensions, setDimensions] = useState({
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                ratio: window.innerWidth/window.innerHeight
                                              })
  const layout = dimensions.ratio > 1.333 ? 'horizontal' : 'vertical'
  const handleResize = () => {
    setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    ratio: window.innerWidth/window.innerHeight
                  })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return layout
}
