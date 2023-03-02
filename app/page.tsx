'use client'
import { Box, HStack, VStack, Button, Text, Stack } from '@chakra-ui/react';
import Header from './Header';
import Link from 'next/link';
import Desktop from './display/Desktop';
import Mobile from './display/Mobile';

//this is the main page users will be routed here on page load. 


export default function Home() {
  return (

    <Box h={'full'}>
      <Header />
      <Desktop />
      <Mobile />
    </Box>


  )
}
