import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.g`
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  &:hover {
    fill: #ec8148;
  }
`
export default function SolomonIl(props) {
  return (
    <StyledGroup id="solomonil" onClick={props.onClick} fill={props.fill}>
      <path
        d="M4652.122 3357.063c-.144 0-.318.02-.521.041a12.844 12.844 0 01-1.306.084 5.481 5.481 0 01-1.477-.181l-.364-.1-2.3-3.513 2.715-.745 2.384.477.493 1.395 4.034 2.832zm-160.559-9.315c-.2-.07-.381-.119-.551-.168a7.954 7.954 0 01-2.335-1.041l-.246-.151-.889-1.8a10.711 10.711 0 00-4.251-1.414l-.426-.044-.19-.245-.037-.019a3.707 3.707 0 01-1.244-.937l-2.126-.43-.976-1.708.412-1.536.959-1.183.659.222c3.969 1.339 11.219 5.367 14.023 8.161l1.114 1.111-3.563 1.3zm136.134-10.983a4.167 4.167 0 01-.4-.108 4.017 4.017 0 00-1.323-.218l-.848.026-.953-2.2.071-2.017 1.587.286.522-.891 1.76-.741.169-.011c.364-.023.749-.036 1.15-.036a13.2 13.2 0 015.645 1.131l1.168.55-1.425 1.717.137.893-3.272.331-.191-.058a2.136 2.136 0 00-.794-.13c-.181 0-.4.01-.686.031l-1.851 1.534zm-88.554-7.782a12.147 12.147 0 01-3.712-.692l-1.941.228-.228-.086c-.533-.2-1.1-.41-1.7-.63-4.154-1.527-9.324-3.426-12.68-6.255l-.4-.339.161-1.683-.862-.777-.122-1.885a13.888 13.888 0 00-3.793-.8l-.857-.034-.239-2.059.894-2.545.681-.025h.234c2.823 0 5.6 1.869 8.057 3.519.718.482 1.419.954 2.1 1.363l2.726 1.37 1.81-.089 2.557 1.089 2.136-.375.314.179c.868.5 2.025 2.266 3.857 5.355.234.394.43.725.569.947l.165.265-.054 1.147 3.78 2.251-2.6.49a4.59 4.59 0 01-.853.071zm-40.671-22.737a28.769 28.769 0 01-8.076-2.922c-.7-.053-1.436-.092-2.183-.132-5.735-.3-12.874-.686-15.261-7.839a23.148 23.148 0 01-.118-4.334l.014-.24.808-1.381 2.064-1.124 2.15.219 5.092 3.735a13.576 13.576 0 011.569-.071c1.881 0 4.535.2 6.291.325.606.044 1.108.081 1.438.1l.288.016.356.253a56.5 56.5 0 006.138 3.974l.3.145 1.2 2.317 1.556.576 1.3 1.607.648 3.074-.581.372a12.729 12.729 0 01-4.741 1.337l-.128.013zm20.868-3.569l-.972.569-1.547-1.837s.076-.693.093-.828l-1.776-.907-2.934-4.607-3.625-2.184-.391-.9-3.473-2.716-.088-.129c-1.907-2.808-3.858-10.019-4.45-12.56l-.11-.473 1.218-1.517-2.6-3.619.531-2.338.911.129a3.505 3.505 0 01.46.11 4.386 4.386 0 001.195.207l.441-.4h2.045l6.3 7.815-.58 1.973-.865.671-.256 1.361.249.311 1.572.48 3.084 2.954.062.309a8.914 8.914 0 00.273.858 10.665 10.665 0 01.7 2.859l1.118 1.42-.158 2.388 3.267 1.279 3.346 6.518-.014.27a6.066 6.066 0 00.032.7 7.261 7.261 0 01-.171 2.742l-.523 1.607zm-28.1-13.926l-.774.208-.814-.611-.29-.826-1.343-.7-2.291-.214-.391-2.631 2.765-1.092h.2a1.977 1.977 0 01.847.213 1.79 1.79 0 00.892.161c.1 0 .2 0 .314-.008l.393-.021.3.252c.771.645 2.357 2.059 3.612 3.219l.822.762-2.256 1.942zm-27.47-2.294a4.374 4.374 0 01-1.111-.178 8.449 8.449 0 00-1.731-.283l-.378-.024-1.852-1.852.824-.7c.073-.062.144-.135.224-.215a6.868 6.868 0 012.5-1.654l.369-.154 1.154.443.434.415 1.769.347.092 2.831-1.9 1.007s-.334.017-.392.017zm-26.132-9.757l1.131-1.695-3.42 2.19-2.407-.962-1.856-2.105-.12.24-2.364-3.039-2.141-.583-2.057-1.7-.055-.382a29.432 29.432 0 00-.171-1.042 15.76 15.76 0 01-.268-2.241c-.232-.022-.572-.04-1.06-.04-1.017 0-2.117.075-2.683.12l-1.478 1.376-2.828-.792-.434-2.011.584-1.828 2.436-1.043.514-1.249 2.8-2.723 2.051-.505 3.54 1.385.051 3.9.484.658 2.609.652.178.151c.379.322 1.53 1.3 3.2 6.489l.1.3-.041.131a1.675 1.675 0 00.657-.544l.481-.681.756.351a6.331 6.331 0 00.684.185 6.01 6.01 0 012.829 1.238l.9.886-1.7 1.071.241.426.085 1.58 1.741-2.611.694 1.8a5.7 5.7 0 01.2.763 6.092 6.092 0 00.588 1.767l.617 1.026-2.551.968-1.319.165zm-11.555.672c-1.077 0-4.847-1.719-4.883-1.736l-.4-.192-.019.145-.889.029c-.92 0-2.561-1.4-4.877-4.159l-.471-.561 1.189-1.868.268-.123a9.2 9.2 0 00.827-.535 7.855 7.855 0 013.291-1.6l.646-.05 1.236 2.265-1.2 2.562-.852.354-.2.683.694.754-.012-.09 1.1-.038c.225-.008.423-.03.619-.05a8.561 8.561 0 01.949-.062 8.15 8.15 0 011.8.227l.279.063.2.2a.333.333 0 00.117.077 4.706 4.706 0 011.454 1.246l.3.333-.235 2.061-.862.066zm55.392-2.731a19.939 19.939 0 01-2.649-1.709l.121.175-3.121.589-.338-.223a3.742 3.742 0 00-.474-.243 5.036 5.036 0 01-2.174-1.687l-.326-.447.774-1.934c-2.739-1.076-4.913-2.034-5.871-3.118l-1.2-.206-.208-.177a17.537 17.537 0 00-3.673-2.14c-2.185-1.057-4.441-2.149-5.942-4.291l-1.223-.472-.159-.174a19.592 19.592 0 00-3.989-3.332l-.374-.212-.648-2.594c-.12-.106-.266-.223-.424-.351a8.29 8.29 0 01-2.054-2.167l-1.112-2 9.248 2.242.2.191a75.235 75.235 0 006.622 5.489q.918.7 1.858 1.433l2.179.227 2.089 1.59c2.255.317 6.024 3.114 10.34 6.452 1.294 1 2.412 1.866 2.961 2.2l.971.59-1.514 1.9.793.851.777 1.969v2.334zm-82.58-15.416l.058-.285c.01-.057.014-.137.023-.235a8.16 8.16 0 01.447-2.179l.135-.379 1.736-.865-.3-.2.148-1.456-2.271-2.227-.178-2.418 2.385-2.113.538.167a9.928 9.928 0 013.991 2.987l2.751.88-.158.865a5.433 5.433 0 01-1.815 2.627 7.83 7.83 0 00-1.611 1.968l-.131.277-1.62.958-1.15-1.915-.269-.184 1.107 4.208-.426 2.1-1.517 2.329zm12.906 2.376l-2.406-3.044.233-2.5 2.272-1.972 2.653-.275 1.488.993 1.125 1.672.311 2.12-.447 1.909-.85.886-.973.5zm8.476-16.02l-.532-.886h-.259a20.194 20.194 0 01-4.558-.779l-.151-.041-.132-.084c-3.05-1.96-5.7-4.919-8.263-7.781a50.125 50.125 0 00-6.732-6.648l-.406-.305.036-2.685 1.447-1.261 3.838 1.06.192.2a22.834 22.834 0 005.943 3.868 24.217 24.217 0 015.851 3.759l.2.2.846 3.589c1.722 1.8 4.3 4.137 7.337 4.723l.341.066 1.727 2-3.455 2.111zm-41.372-8.929l1.284-2.717 1.583-1.5 4.577 2.58-1.511 2.455-3.332.565z"
      />
    </StyledGroup>
  )
}
