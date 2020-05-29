import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.g`
  mix-blend-mode: color;
  fill: ${props => props.fill || '#e89a24'};
  &:hover {
    fill: #ec8148;
  }
`
export default function PapuaNewGuinea(props) {
  return (
    <StyledGroup id="papuanewguinea" onClick={props.onClick} fill={props.fill}>
      <path
        d="M4194.747 3120.917a5.882 5.882 0 01-2.64-.569l1.366-.182.66-1.024.637-.342.911.888zm-31.8-4.166l.66.046 1.662-.819 1.548.3 1.32-.775c2.835.927 7.147 1.689 9.7.775l1.525.432a24.448 24.448 0 013.574-2.64 5.34 5.34 0 002.527-.092l.273-1.115-.455-.41-.137.136.046.547c-.716.16-7.652-1.723-8.6-1.844-3.079-.726-7.519.23-10.222-.046l-1.594.957v2.071l-1.912.478c-.293 1.487.138 1.491.082 1.999zm3.324 72.389l-.365 1.16a20.919 20.919 0 002.55 3.1l1.411-.092 1.276-1.138-.069-3.051-1.73-1.456zm-25.362-12.384l1.753-.66 1.093-2-.205-1.594-.933-.842a8.043 8.043 0 00-2.595 1.48l-.57 1.479.319 1.571zm-78.314 87.116c2.944.99 5.725 3.753 8.605 4.37l-.341-1.024-3.483-2.686c-1.654-.4-4.708-1.34-5.8-2.253zm8.56-.2l.2-.5-.137-1.616c-1.6-.515-4.935-.394-6.556-.546l1.024 1.138 4.326 1.594zm240.293-117.6l.82-2-.592-2.118-1.753.387-.751.752.888 1.753zm-16.323-8.787a27.4 27.4 0 002.254 2.982l.751.092.387-1.161c-.635-1.076-2.319-1.973-2.846-2.482zm-52.748-32.688l1.73.5.137-.842-.683-2.913-2.072-1.73-1.252-.274-.956 1.275-.228 1.5 2.8 2.572zm8.992 26.063c1.571.655 5.3.277 6.693.3a9.813 9.813 0 00.683-3.483l-.41-1.024-4.78-2.208a18.886 18.886 0 00-6.784 1.867c1.151 1.045 1.522.67 1.912.978a10.274 10.274 0 002.683 3.569zm-66.476 65.082l-.3 2.436 2.072 2.891 2.231.978.318 1.07 1.048-.182 1-1.389.683-2.663-.432-.91-4.963-2.914-1.275-.023zm147.887 135.831l-2.368-.456a6.071 6.071 0 00.911 1.593c1.965.4 2.637-.162 4.212-.386l.864.432.479-1.207c-1.332-.835-3.076-.847-4.417-1.206zm-14.8 2.116c-1.717-.875-6.426-3.336-8.105-3.551.045 1.333.46 1.475.592 2.162l2.14 1.161-.956 1.025 1.8-.455.432 1.434 3.461.864.819.8c1.482-.107 4.343-.285 5.259-.887l-1.343-1.3zm-71.166-26.588a48.859 48.859 0 005.578-2.231l-4.667.411c-6.029-1.945-14.066-2.99-19.624-5.714a19.775 19.775 0 00-2.55-3.3l.068-1.411c2.086-.755 4.312-.86 5.8-1.5l.752-1.093c-5.419-3.143-13.178-.943-18.6-4.529l-1.343-2.072a12.728 12.728 0 012-5.122l-.2-2.5-1.184-.934c-3.784-1.193-9.39 1.865-13.272 1.252l-2.345-.934c-1.215-1.924-2.144-6.206-2.618-8.172a55.433 55.433 0 00-4.895-3.3c-.4-3.531-.852-7.464-2.071-10.335-12.082-6.3-23-15.053-27.069-28.591l.251-1.138 4.439-2.527c4.785.611 12.864.725 17.484-.137l1-.955a15.475 15.475 0 00-.3-8.082c-8.868-9.72-4.936-7.191-18.725-9.731-10.374-5.107-18.875-9.757-28.241-10.892l-2.55-1.662c1.469-3.538 3.053-10.025 2.14-13.658l-9.607-10.608a21.361 21.361 0 01-6.1-1c-3.25-3.41-5.911-7.939-10.495-8.763l-1.731-1.981-.387-1.389c-13.04-4.7-4.072 5.323-24.131-10.836-13.5-1.96-27.131-7.3-39.249-12.36-5.471-2.7-15.249-9.265-21.718-8.786-6.494 32.872-5.417 68.355-16.3 99.567a16.052 16.052 0 002.391 3.984c-2.245 17.452-4.347 35.19-6.291 52.5 2.3.754 4.646 1.4 7.014 1.944a12.912 12.912 0 013.944-.927c9.25 3.921 18.637-2.816 31.508 3.984 5.764-3.4 13.514-5.97 19.373-8.673l.706-1.23.364-2.481c-2.255-6.387-8.726-8.566-14.069-10.721-2.01-.142-6.783-.422-8.355.569l-2-1.321a10.722 10.722 0 00-1.389-2.731l-3.005-.046a12.7 12.7 0 013.665-.683c1.059 1.7 1.292 2.583 2.185 3.529l1.936.136c5.832-2.8 8 2.25 28.207-2.845-.567-1.978-1.025-3.693-1.935-4.69l.91-.363c2.779.021 6.4 1.588 8.492.8l-1-1.776a5.322 5.322 0 002.573.046c-.907-1.8-3.963-10.269-6.056-11.4 2.671 1.151 3.917 3.763 5.623 5.076a26.355 26.355 0 008.105 2.162 8.394 8.394 0 013.483-2.276l1.252.41.728-.114.683-1.89 1.617-.728c3.415.812 5.882 2.343 8.856 1.593l.273 2.391.82 1c9.465 3.469 20.315 2.93 28.662 8.036 1.98 3.48 3.978 4.286 4.735 7.945 3.8 3.387 5.983 9.686 8.97 13.179 1.037.43 4.707 1.848 5.35 1.572l1.366-.729a9.919 9.919 0 00-1.389 4.279c2.828 6.3 12.449 7.219 14.638 15.275a17.8 17.8 0 0014.844 4.507c4.3.82 8.387 3.027 12.726 1.207 10.117 5.3 26.713-.121 33.807 9.742 4.927 1.887 11.026 2.793 15.276-.273l.8-.887a16.241 16.241 0 00-3.825-2.118l-1.844-1.98.956-.706zm130.084-90.508l-1.229-.888-2.027-3.961c-1.588-1.51-3.227-2.213-4.075-3.482 0-1.538-1.623-3.54-2.185-4.826l-2.277-1.912c-1.763-.1-4.859-1.083-5.4-2.162l-1.07-.274c.383 5-3.914 10.72 4.007 15.229l1.548 2.413c.958.841 3.513 1.822 4.6 2.413l.592 2.367-.819 2.6a13.147 13.147 0 0012.066 8.057c2.29-1.311 2.459-1.6 4.484-2.093l.524.8.478-.365.774-2.072c-.533-5.504-5.062-10.815-9.989-11.845zm-17.871-22.649l-.82-1.753v-2.027l-1.138-.956a14.31 14.31 0 00-2.481 2.117c1.207 2.651.421 5.408 1.525 7.6l.5-.183 1.365-1.069zm-54.934 83.292c-1.48.14-3.873.105-4.485-.274a6.228 6.228 0 00-3.005 1.071l3.005 1.161 1.639 1.57.228.934a20.091 20.091 0 013.6 1.365l1.434-.455 1.093.159-.137-.888.706-.387.273-.455.046-.524a7.634 7.634 0 00-3.483-1.935zm10.085-93.831l1.981-1.663a8.621 8.621 0 002.527-6.351 14.6 14.6 0 002.458-2.776l-.022-2.3c-4.945-7.578-19.2-16.632-24.906-24.129l-5.418-2.027c-3.811-3.526-8.773-7.291-13.7-7.6l-1.07-1.936a78.975 78.975 0 01-8.151-5.372l.274 1.662-.592 1.617-2.026.523 2.413 1.047 2.982.114c2.538 1.42 9.7 5.442 11.565 7.945 5.551 2.841 10.34 9.693 17.1 10.084 5.805 5.748 13.049 14.613 10.04 23.31.622 3.208 3.249 5.691 4.544 7.847zm-71.143 107.557c3.4.15 7.342.919 10.358 1l-.182.911 1.343-.8.16-.591a8.929 8.929 0 01-.273-2.892l-2.095-2.185-1.047-.319-2 .525-3.392-1.89c-1.5-.144-1.505.207-2.323.25-.474 1.311-.084 1.2-.2 1.684l1.662 2.323c-.806 1.26-1.538 1.416-2.012 1.983zm-2.049-2.982l.774-2.208a11.18 11.18 0 00-.956-3.005l-2.732-1.365-1.958 1.206-.819 2.3 3.87 3.187 1.434.433zm50.062-99.773l.888-1.593c1.761.006 5.265-.09 6.192-.911a41.54 41.54 0 004.007-5.031l.319-2.345a9.528 9.528 0 01-.706-3.209l1.366-3.415a22.829 22.829 0 01-5.077-1.479l-1.844-1.753-3.915 2.3-1.253-.524a13.373 13.373 0 01-2.253-1.912 24.957 24.957 0 00-5.578-.568 5.956 5.956 0 00-1.434 2.23c.6 3.957 3.548 9.377 1.889 13.568l-2.55 1.183c-7.864-1.818-12.915 5.522-16.528 10.722-2.7.955-4.155.444-5.668 1.821l-2.732.182-2.527-1.48-2.914.206-2.778 1.388-2.868-.342-1.708-2.253-.592-2.778.524-2.845a10.322 10.322 0 012.459-2.6l-1.07-1.275-.774-.159-1.184.5c-1.035 1.7-2.432 7.492-2.982 9.492l-3.484 1.662a33.931 33.931 0 01-4.962-.3c-5.39 2.472-10.955.9-15.8-1.116l-5.487.5a9.739 9.739 0 00-2.868-.66c-2.376 1.085-4.03-.121-5.851-.477l-2.345 1.638-.5 2.891 1.388 2.254c6.372 1.325 12.374 5.35 17.393 8.809 1.735-.607 4.993-1.321 6.511-1.024l2.436 1.138 2.6 3.21 1.32.706c9.642.315 20.342 1.845 29.116-4.079 6.2-1.781 14.2-3.109 18.032-9.33l.16-1.479.933-.865a38.8 38.8 0 018.719.569 18.823 18.823 0 005.51-2.3l1.843-2.254a21.715 21.715 0 00-3.278-4.893zm-30.369 76.44l-1.162 1.639 1.867 1.047c.208 1.856-.886 2.639-1.229 3.6l1.821 1.775-.3-1.638 1.116-3.711-.478-1.07.25-2.322c-1.575.26-1.335.543-1.886.679zm.933 33.827l-1.935 1.639-1.048-.023-.865-.843.251-.978c-1.124-.819-5.268-3.369-5.555-4.666l-.979-.615.228 1.457a12.083 12.083 0 012.322 4.416l1.366.682v2.163c1.242.395 5.981 1.52 6.693 2.39l2.072-5.326-.934-.8z"
      />
    </StyledGroup>
  )
}
