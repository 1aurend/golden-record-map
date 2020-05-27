import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'rebass'
import {
  Select,
  Label
} from '@rebass/forms'
import { useHistory, Link } from 'react-router-dom'
import countries from '../countries'
import music from '../music'


export default function Sidebar({ country, setTrack }) {
  const history = useHistory()

  const onSelectCountry = (e) => {
    switch (e.target.value) {
    case '-----':
      history.push('/')
      break
    default:
      Object.entries(countries).forEach(([ key, country ]) => {
        if (country.name === e.target.value) {
          history.push(country.path)
          return
        }
      })
      break
    }
  }

  return (
    <Flex
      width={'25vw'}
      height={'100vh'}
      bg='gray'
      pt={5}
      alignItems='center'
      flexDirection='column'
      overflow='scroll'
      >
      {country &&
        <Box
          pb={5}
          >
          <Label htmlFor='country'>Select a Country...</Label>
          <Select
            id='country'
            name='country'
            width={'20vw'}
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            >
            <option key='empty'></option>
            {Object.entries(countries).map(([ key, country ]) => (
              <option
                key={key}>
                {country.name}
              </option>
            ))}
            >
          </Select>
        </Box>
      }
      <Heading
        fontFamily='sans-serif'
        fontSize={32}
        textAlign='center'
        height={80}
        pr={4}
        pl={4}
        >
        {country? countries[country].name : 'Voyager Golden Record'}
      </Heading>
      {!country &&
        <Box
          pt={5}
          pb={5}
          >
          <Label htmlFor='country'>Select a Country...</Label>
          <Select
            id='country'
            name='country'
            width={'20vw'}
            value={country ? countries[country].name : ''}
            onChange={onSelectCountry}
            >
            <option key='empty'></option>
            {Object.entries(countries).map(([ key, country ]) => (
              <option
                key={key}>
                {country.name}
              </option>
            ))}
            >
          </Select>
        </Box>
      }
      <Heading
        fontFamily='sans-serif'
        pb={3}
        pt={3}
        fontSize={24}
        textAlign='center'
        height={30}
        >
        {country? '' : 'About This Map'}
      </Heading>
      {country?
        <Box
          pl={4}
          pr={4}
          pb={5}
          >
          {
            countries[country].tracks.map((track, i) => {
              return (
                <Text
                  key={track-1}
                  pb={3}
                  >
                  <Link onClick={() => setTrack(music[track-1])}>{i+1}.</Link>
                   {JSON.stringify(music[track-1], null, 2)}
                </Text>
              )
            })
          }
        </Box>
        :
        <>
          <Text
          p={4}
          pt={3}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Pretium quam vulputate dignissim suspendisse in est ante in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Luctus venenatis lectus magna fringilla urna porttitor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec enim diam vulputate ut pharetra. Feugiat scelerisque varius morbi enim nunc faucibus a. Metus vulputate eu scelerisque felis imperdiet. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Eros in cursus turpis massa tincidunt.
        </Text>
        <Text
          pr={4}
          pl={4}
          >
          Mattis rhoncus urna neque viverra justo. Eu nisl nunc mi ipsum faucibus. Sodales ut etiam sit amet nisl purus in mollis nunc. Vel pretium lectus quam id. Massa massa ultricies mi quis. Quam vulputate dignissim suspendisse in est ante in nibh. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis leo vel. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Amet aliquam id diam maecenas. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non odio euismod lacinia at quis. Laoreet id donec ultrices tincidunt arcu non sodales.
        </Text>
      </>
    }
    </Flex>
  )
}
