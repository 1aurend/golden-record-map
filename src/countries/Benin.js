import React from 'react'
import styled from 'styled-components'

const StyledBenin = styled(Benin)`
  #20200528map_svg__BENIN_FILL {
    fill: ${props => props.fill || '#e89a24'};

    &:hover {
      fill: #ec8148;
    }
  }
`
export default StyledBenin

function Benin(props) {
  return (
    <g id="benin" onClick={props.onClick}>
      <path
        id="20200528map_svg__BENIN_FILL"
        className="20200528map_svg__cls-2"
        d="M1594.912 1085.625c-2.48-.331-6.615-.817-9.311.591-.89 1.87-3.472 5.192-3.756 7.353-1.68 2.131-5.287 3.159-7.9 4.917l-1.73 2.823c-1.017.687-5.389 1.313-6.853 1.115l-.341-.25-.888-1.912a7.588 7.588 0 00-5.669-.638l-1.616 2.664a44.9 44.9 0 01-7.763.637c-2.781-.646-3.741-3.319-7.012-3.893l-2.732 1.252a42.3 42.3 0 00-8.56-2.117c-2.763 2.091-7.152 2.486-10.746 1.821-1.394-1.389-3.916-4.056-5.35-5.782-6.088.83-12.3 4.716-18.212 5.623-3.218 1.963-8.949 3.785-12.7 5.076l-.8 1.047a29.675 29.675 0 01-5.054 2.618 27.649 27.649 0 00-2.277 3.119l-.865.364a5.54 5.54 0 00-1.776-.25c-3.2.939-6.9 4.589-10.7 4.1a16.886 16.886 0 00-5.577 4.394 28.5 28.5 0 00-9.585 2.435c-6.342-7.105-15.923-17.675-23.175-23.924l.637-.683 4.075 3.46 2.618-2.368 2.026-4.279v-1.275l1.548-1.366h1.708c.31-.561 2.032-1.46 3.119-2.071l2-2.5 1.776 2.162c16.952-7.4 34.843-15.363 51.906-22.672l1.707-1.685 1.526-4.757 1.389-1.662c4.508-3.064 11.063-5.091 15.708-7.58.2-4.685.655-11.167 1-16.026l.455-.66 8.992-2.481c2.395.75 6.514.313 9.266-.091l.364.546a9.882 9.882 0 003.21.547 5.9 5.9 0 00.615 1.934l.82.365 1.024-.456h1.3l1.047.683a6.349 6.349 0 002.231-.5c1.166.715 1.523 2.518 3.734 3.438 1.97.063 2.41.38 4.8.592l.888.455a11.184 11.184 0 012.072 2.959l-.683 1.32 5.008 5.373 1.184 2.959c6.369 2.746 14.511 5.815 21.741 4.12 1.024-.553 3.937-3.078 5.123-3.118 3.632 2.532 6.421 5.917 10.768 8.149.218.55.094.284.683 1.753-1.266 3.5-2.259 10.621-5.054 13.453l-.273 1.8.66 2.254-.41 2.458z"
      />
      <path
        id="20200528map_svg__BENIN_STROKE"
        className="20200528map_svg__cls-3"
        d="M1594.912 1085.625c-2.48-.331-6.615-.817-9.311.591-.89 1.87-3.472 5.192-3.756 7.353-1.68 2.131-5.287 3.159-7.9 4.917l-1.73 2.823c-1.017.687-5.389 1.313-6.853 1.115l-.341-.25-.888-1.912a7.588 7.588 0 00-5.669-.638l-1.616 2.664a44.9 44.9 0 01-7.763.637c-2.781-.646-3.741-3.319-7.012-3.893l-2.732 1.252a42.3 42.3 0 00-8.56-2.117c-2.763 2.091-7.152 2.486-10.746 1.821-1.394-1.389-3.916-4.056-5.35-5.782-6.088.83-12.3 4.716-18.212 5.623-3.218 1.963-8.949 3.785-12.7 5.076l-.8 1.047a29.675 29.675 0 01-5.054 2.618 27.649 27.649 0 00-2.277 3.119l-.865.364a5.54 5.54 0 00-1.776-.25c-3.2.939-6.9 4.589-10.7 4.1a16.886 16.886 0 00-5.577 4.394 28.5 28.5 0 00-9.585 2.435c-6.342-7.105-15.923-17.675-23.175-23.924l.637-.683 4.075 3.46 2.618-2.368 2.026-4.279v-1.275l1.548-1.366h1.708c.31-.561 2.032-1.46 3.119-2.071l2-2.5 1.776 2.162c16.952-7.4 34.843-15.363 51.906-22.672l1.707-1.685 1.526-4.757 1.389-1.662c4.508-3.064 11.063-5.091 15.708-7.58.2-4.685.655-11.167 1-16.026l.455-.66 8.992-2.481c2.395.75 6.514.313 9.266-.091l.364.546a9.882 9.882 0 003.21.547 5.9 5.9 0 00.615 1.934l.82.365 1.024-.456h1.3l1.047.683a6.349 6.349 0 002.231-.5c1.166.715 1.523 2.518 3.734 3.438 1.97.063 2.41.38 4.8.592l.888.455a11.184 11.184 0 012.072 2.959l-.683 1.32 5.008 5.373 1.184 2.959c6.369 2.746 14.511 5.815 21.741 4.12 1.024-.553 3.937-3.078 5.123-3.118 3.632 2.532 6.421 5.917 10.768 8.149.218.55.094.284.683 1.753-1.266 3.5-2.259 10.621-5.054 13.453l-.273 1.8.66 2.254-.41 2.458z"
      />
    </g>
  )
}
