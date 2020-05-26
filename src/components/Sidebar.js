import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading
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
        >
        {country? countries[country].name : 'Voyager Golden Record'}
      </Heading>
      <Box
        pt={3}
        >
        <Label htmlFor='country'>Country</Label>
        <Select
          id='country'
          name='country'
          placeholder='Select...'
          width={'10vw'}
          onChange={onSelectCountry}
          >
          <option key='-'>-----</option>
          {Object.entries(countries).map(([ key, country ]) => (
            <option
              key={key}>
              {country.name}
            </option>
          ))}
          >
        </Select>
      </Box>
    </Flex>
  )
}
