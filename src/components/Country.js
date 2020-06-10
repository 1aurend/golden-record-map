import React from 'react'
import styled from '@emotion/styled'

const StyledGroup = styled.g`
  cursor: pointer;
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  transition: fill 0.75s;
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
