import { Box, Image, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import TaoLogo from './TAO_white.svg';
import ChattensorLogo from './assets/chattensorwhite.svg'


//this component will be called on very page 
//also useState will be used to get the users tor credit 

function Header() {
  return (
    <header >
      <Box h={'7.5vh'} color={'#FFFFFF'} display={'flex'} alignItems={'end'}>
        <HStack w={'100%'} justifyContent={['center', 'space-between']}>
          <Box w={['fill',]} alignItems={'center'} justifyContent={'center'} display={'flex'} alignSelf={['flex-start', 'center']}>
            <Box w={'200px'} display={'flex'} alignContent={'center'} justifyContent={'center'} ><Box w={'100px'} pt={'5px !important'} h={'27px'} ><ChattensorLogo /></Box></Box>
          </Box>
          <Box w={'200px'} fontFamily={'TT Commons Pro Mono Regular'} fontSize={'20px'} flexDirection={'row'}
            alignItems={'center'} alignSelf={'end !important'} justifyContent={'end'} display={['none', 'flex']}>
            <Box h={'14px'} display={'flex'} w={'10px'} alignItems={'flex-end'} mr={'2px !important'}><TaoLogo /></Box>
            <Text >0.00</Text>
          </Box>
        </HStack>
      </Box>
    </header>
  )
}

export default Header;

