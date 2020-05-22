import React from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass'


export default function Map() {
  return (
    <Flex
      height={'100vh'}
      bg='black'
      flexDirection='column'
      >
    <Flex
      width={'75vw'}
      justifyContent={'center'}
      pl={5}
      pt={7}
      pr={5}
      bg='black'
      >
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='gold'
        color='black'
        p={3}
        m={1}>
        click me!
      </Button>
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='gray'
        color='white'
        p={3}
        m={1}
        >
        click me!
      </Button>
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='purple'
        color='white'
        p={3}
        m={1}
        >
        click me!
      </Button>
    </Flex>
    <Flex
      width={'75vw'}
      height={'75vh'}
      pl={5}
      pr={5}
      justifyContent={'center'}
      bg='black'
      >
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='purple'
        color='white'
        p={3}
        m={1}>
        click me!
      </Button>
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='gold'
        color='black'
        p={3}
        m={1}
        >
        click me!
      </Button>
      <Button
        width={'10vw'}
        height={'10vw'}
        bg='gray'
        color='white'
        p={3}
        m={1}
        >
        click me!
      </Button>
    </Flex>
  </Flex>
  )
}
