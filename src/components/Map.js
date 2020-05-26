import React from 'react'
import {
  Flex,
  Button
} from 'rebass'
import styled from 'styled-components'
import Popup from '@bit/semantic-org.semantic-ui-react.popup'
import {
  Link,
  useHistory
} from 'react-router-dom'
import countries from '../countries.js'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const Slider = styled(Flex)`
  height: ${props => props.height || '100vh'};
  padding-top: ${props =>  props.height === '65vh' ? '10vh' : '20vh'};
  padding-left: ${props =>  props.height === '65vh' ? '20vh' : '10vh'};
  padding-right: ${props =>  props.height === '65vh' ? '20vh' : '10vh'};
  transition: height 2s, padding-top 2s;
`
const Shrinker = styled(Button)`
  height: ${props => props.height === '65vh' ? '6vw' : '8vw'};
  width: ${props => props.height === '65vh' ? '6vw' : '8vw'};
  transition: height 1s, width 1s;
  background-color: ${props => props.highlight ? 'gold' : 'gray' };
  color: ${props => props.highlight ? 'black' : 'white' };

  &:hover {
    filter: ${props => props.highlight ? '' : 'brightness(150%)' };
  }
`



export default function Map({ height, highlight }) {
  const history = useHistory()

  const onSelectCountry = (e) => {
    switch (e.target.value) {
    case '-----':
      history.push('/')
      break
    default:
      history.push(countries[e.target.value].path)
      break
    }
  }

  return (
    <Slider
      height={height}
      width={'75vw'}
      justifyContent='center'
      pl={5}
      pr={5}
      bg='black'
      flexDirection='row'
      flexWrap='wrap'
      alignContent='flex-start'
      >
      {style}
      {
        Object.entries(countries).map(([key, country]) => {
          // QUESTION: should this be conditional and omit the popup if country is currently selected?
          return (
            <Popup
              hoverable
              trigger={
                <Shrinker
                  height={height}
                  highlight={key === highlight}
                  m={1}
                  onClick={onSelectCountry}
                  value={key}
                  >
                  {country.name}
                </Shrinker>
              }
              content={
                <div>
                  <p>{country.tracks.length} tracks</p>
                  <Link to={`/${key.toLowerCase()}`}>details</Link>
                </div>
              }
              />
          )
        })
      }
  </Slider>
  )
}
