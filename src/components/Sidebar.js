import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading
} from 'rebass'
import {
  Select
} from '@rebass/forms'
import countries from '../countries'


export default function Sidebar({ country }) {
  const [selection, setSelection] = useState('')

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
        >
        {country? country : 'Voyager Golden Record'}
      </Heading>
      <Box
        pt={3}
        >
        <Select
          id='country'
          name='country'
          defaultValue='United States'
          width={'10vw'}
          >
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
