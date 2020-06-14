import React from 'react'
import styled from '@emotion/styled'
import countries from '../countries'

const StyledGroup = styled.g`
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  &:hover {
    fill: #ec8148;
  }
`
export default function Georgia({ onClick, fill }) {
  return (
    <StyledGroup id="georgia" onClick={() => onClick(countries.GEORGIA.view)} fill={fill}>
      <path
        d="M2792.645 1412.145l-.592-.068-2.481-1.662-.2.159-.045.956-.274.046c-1.028-.857-3.616-3.516-5.145-4.075-3.358-5.237-10.251-6.459-14.934-11.063a2.916 2.916 0 00.865-.888v-.728l-.3-.729a5.029 5.029 0 01-1.821-2l.045-1.252.41-.614.843-.023a35.1 35.1 0 01.068-6.146l-.592-1.434.956-1.594-.136-.66a6.141 6.141 0 00-1.89-1.753 3.359 3.359 0 00-.888-.159c-.912.187-2.136.918-3.6.728-1.409-2.233-3.094-5.207-5.782-7.421l-2.55-.2c-.562-1.367-1.327-3.061-2.322-5.168 4.094-.291 8.9-.869 12.043-4.3 2.367-5.925 8.782-10.846 10.745-16.572l-1.844-4.871 1.207-2.459-.182-4.78c-3.974-4.273-2.741-10.772-3.529-15.821a29.1 29.1 0 013.984-.865l1.116.5c.971 1.347 2.38 3.466 3.392 5.236l2.026 1.161c.969 3.562 2 8.39 4.8 11.518a37.728 37.728 0 00.524 4.462l5.282 5.964a14.831 14.831 0 015.281 3.733l.5 2.868a24.672 24.672 0 002.732 2.026 21.132 21.132 0 011.389 3.984l-.729.774c-.315 4.738 3.274 9.205 4.007 14.2l-.182.5-.524.387-1.457.227-.933.547-.159.637.409 1.138 1.571 1.617 1.161.091c2.433 1.361 6.437 1.708 9.334 3.255a6.216 6.216 0 011.48 1.844l.137.979-.8 2.5 3.506-1.275.455.091a21.758 21.758 0 002.117 4.735c.235.534-.278 3.579-.432 4.621 1.194 1.134 3.717 2.5 4.029 4.757l-.159.66a63.884 63.884 0 01-5.783 3.028l-.5.592c.046 1.964 1.264 3.848.82 6.624a11.191 11.191 0 002.482 3.824c-.141.856.9 2.784.933 4.257a12.479 12.479 0 01-4.189.819 5.1 5.1 0 00-1.685-.842 4.387 4.387 0 00-2.276 1.821l-.046.342.456.8-1.139 2.231c-.045 2.438 1.565 5.344.615 8.195a30.476 30.476 0 01-3.005 1.662l-2.55.114-1.343-.569c-.692-1.376-.5-3.492-1.32-5.646a11.891 11.891 0 00-2.414-1.138c-.935-1.645-2.538-3.454-2.048-6.1l1.206-.591c-.7-1.626-2.265-5.561-3.506-7.1-.55-.32-5.542-.573-6.64-.644z"
      />
    </StyledGroup>
  )
}
