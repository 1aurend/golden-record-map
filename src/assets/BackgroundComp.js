import React from 'react'
import maplo from './bigmap_lo.jpg'

export default function Background() {
  return (
    <image
      width={8192}
      height={4096}
      transform="scale(1.135)"
      xlinkHref={maplo}
      id="20200528map_svg__background"
    />
  )
}
