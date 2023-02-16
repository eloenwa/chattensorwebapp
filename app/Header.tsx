import {Box } from '@chakra-ui/react';
import React from 'react'

function Header() {
  return (
    <header >
        <Box h={'5vh'} bgColor={'#030B19'}
        p={10}
        color={'#FFFFFF'}
        >Logo goes here</Box>
    </header>
  )
}

export default Header