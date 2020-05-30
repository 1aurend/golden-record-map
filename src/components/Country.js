import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.g`
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  &:hover {
    fill: ${props => props.fill || '#ec8148'};
  }
`

export default function Country({ onClick, fill, path, id, setPopup }) {
  return (
    <StyledGroup
      id={id}
      onClick={() => onClick(id)}
      onMouseEnter={() => setPopup(id)}
      onMouseLeave={() => setPopup(null)}
      fill={fill}
      >
      <path d={path} />
      </StyledGroup>
    )
  }
