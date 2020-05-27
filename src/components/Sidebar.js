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
import { useHistory } from 'react-router-dom'
import countries from '../countries'


export default function Sidebar({ country }) {
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
      pt={4}
      alignItems='center'
      flexDirection='column'
      >
      <Heading
        fontFamily='sans-serif'
        pb={4}
        fontSize={32}
        textAlign='center'
        height={80}
        >
        {country? countries[country].name : 'Voyager Golden Record'}
      </Heading>
      <Box
        pt={3}
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
      <Heading
        fontFamily='sans-serif'
        pb={4}
        pt={5}
        fontSize={24}
        textAlign='center'
        height={30}
        >
        About This Map
      </Heading>
      <Text
        p={3}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Pretium quam vulputate dignissim suspendisse in est ante in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Luctus venenatis lectus magna fringilla urna porttitor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec enim diam vulputate ut pharetra. Feugiat scelerisque varius morbi enim nunc faucibus a. Metus vulputate eu scelerisque felis imperdiet. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Eros in cursus turpis massa tincidunt.
      </Text>
      <Text
        pr={3}
        pl={3}
        >
        Mattis rhoncus urna neque viverra justo. Eu nisl nunc mi ipsum faucibus. Sodales ut etiam sit amet nisl purus in mollis nunc. Vel pretium lectus quam id. Massa massa ultricies mi quis. Quam vulputate dignissim suspendisse in est ante in nibh. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis leo vel. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Amet aliquam id diam maecenas. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non odio euismod lacinia at quis. Laoreet id donec ultrices tincidunt arcu non sodales.
      </Text>
    </Flex>
  )
}
