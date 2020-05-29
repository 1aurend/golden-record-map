import React from 'react'
import styled from 'styled-components'

const StyledBelgium = styled(Belgium)`
  #20200528map_svg__BELGIUM_FILL {
    fill: ${props => props.fill || '#e89a24'};

    &:hover {
      fill: #ec8148;
    }
  }
`
export default StyledBelgium


function Belgium(props) {
  return (
    <g id="belgium" onClick={props.onClick}>
      <path
        id="20200528map_svg__BELGIUM_FILL"
        className="20200528map_svg__cls-2"
        d="M2612.5 823.343l-.388.273-.614 1.8-.843.752-.5 1.32-1.753-.41-.479.3-.455.5.228 1.206-.546.843-1.3.432-1.981.933-3.3-1.639-2.709.069-.5.091.046-.091.637-.5-.228-.41-.182-1.07-2.8-.683-2.094-.068-1.5.068-1.3-.227-1.16.227-.456.228h-.706l-.637.182-.82 1.161-.592.41-1.707 1.639-.956-.046-1 .046-.751-.091-.569-.205-.478-.979-.911-1.161-.842-.706-.228-.455.638-1.206 1.138-1.525.478-.888.524-.5-.114-.865.25-1.366.5-1.07.2-.819-.182-1.025-.41-.774 1.366-.682 1.685-.615.819-.979 4.895-.455.182-.66-.638-.456-1.479-.478-1.457-.022-1.252.113-1.753-1.069-1.435-2.049-.774-2.5.137-.433.227-.227.41-.114.683-.023.957.205 1.092-.205.706-.683.2-.387.933-.159h1.275l.638-.114 1.138-2.162-.182-1.275-.478-1.138-.182-.911-.319-.478-.752-.205-.569-.25.342-.41 3.142-1.457.318-.546-.114-1.594-.728-2.026.387-.728 1.389-.706 1.753-.683 1.457-1.161.273-.455.5-.8-.774-.933-1.617-.956-.614-.637-.228-.251.546-1.274 1.025-1.526 1.275-1.32.819-.478 1.23-.045.728-.547 1.343-.91 1.161-.456 6.762 4.075 3.733 2.572 1.366 1.321-2.049 1-.569.455-.3.5.137.5.819.387.911.592.342 1.3-.114 1.048-.41.478-.228.751.274.888 1.821 1.365 2.3 1.161 1.3.137 1.047-.091-.159 1.115.25.888.478.273 1.434-.683 1.161.433.752.614-.5.547-.364.888.273.546 2.5.933-.2.433-.455.523-.478.205-.5.205-.068.41.7 1.092 1.23.319.842.273-.228.456-1.092.523-1.412.774-1 1.889.091 1.3 1.071 1.343.592.455-.069.456-.728.66-.615 1.161.136 1.935-.136.637-.478.592-1.07.205-2.891-.046-.8.114-.2.182h-.524l-2.208-.569-.637.068-.774.66-.638.547-.045.751.182.66z"
      />
      <path
        id="20200528map_svg__BELGIUM_STROKE"
        className="20200528map_svg__cls-3"
        d="M2612.5 823.343l-.388.273-.614 1.8-.843.752-.5 1.32-1.753-.41-.479.3-.455.5.228 1.206-.546.843-1.3.432-1.981.933-3.3-1.639-2.709.069-.5.091.046-.091.637-.5-.228-.41-.182-1.07-2.8-.683-2.094-.068-1.5.068-1.3-.227-1.16.227-.456.228h-.706l-.637.182-.82 1.161-.592.41-1.707 1.639-.956-.046-1 .046-.751-.091-.569-.205-.478-.979-.911-1.161-.842-.706-.228-.455.638-1.206 1.138-1.525.478-.888.524-.5-.114-.865.25-1.366.5-1.07.2-.819-.182-1.025-.41-.774 1.366-.682 1.685-.615.819-.979 4.895-.455.182-.66-.638-.456-1.479-.478-1.457-.022-1.252.113-1.753-1.069-1.435-2.049-.774-2.5.137-.433.227-.227.41-.114.683-.023.957.205 1.092-.205.706-.683.2-.387.933-.159h1.275l.638-.114 1.138-2.162-.182-1.275-.478-1.138-.182-.911-.319-.478-.752-.205-.569-.25.342-.41 3.142-1.457.318-.546-.114-1.594-.728-2.026.387-.728 1.389-.706 1.753-.683 1.457-1.161.273-.455.5-.8-.774-.933-1.617-.956-.614-.637-.228-.251.546-1.274 1.025-1.526 1.275-1.32.819-.478 1.23-.045.728-.547 1.343-.91 1.161-.456 6.762 4.075 3.733 2.572 1.366 1.321-2.049 1-.569.455-.3.5.137.5.819.387.911.592.342 1.3-.114 1.048-.41.478-.228.751.274.888 1.821 1.365 2.3 1.161 1.3.137 1.047-.091-.159 1.115.25.888.478.273 1.434-.683 1.161.433.752.614-.5.547-.364.888.273.546 2.5.933-.2.433-.455.523-.478.205-.5.205-.068.41.7 1.092 1.23.319.842.273-.228.456-1.092.523-1.412.774-1 1.889.091 1.3 1.071 1.343.592.455-.069.456-.728.66-.615 1.161.136 1.935-.136.637-.478.592-1.07.205-2.891-.046-.8.114-.2.182h-.524l-2.208-.569-.637.068-.774.66-.638.547-.045.751.182.66z"
      />
    </g>
  )
}
