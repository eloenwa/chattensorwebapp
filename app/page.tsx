'use client'
import { Box, HStack, VStack, Button, Text, Stack } from '@chakra-ui/react';
import Header from './Header';
import Link from 'next/link';

//this is the main page users will be routed here on page load. 


export default function Home() {
  return (
    <>
      <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="92.5vh" alignItems={'center'} justifyContent={'center'}
        color={'#FFFFFF'}>
        <VStack >
          <Box display={'flex'} fontSize={'12px'} w={'394px'} justifyContent={'space-between'} flexDir={['column', 'row']} alignItems={'center'}>
            <Box h={'200px'} w={'187px'} borderWidth={"0.5px"} borderColor={'#707070'} borderRadius={'5px'} mt={'10px !important'}>
              <VStack fontFamily={'Arial'} >
                <Text fontFamily={'Haffer-Regular'} fontSize={'15px'} p={1}>Capabilities</Text>
                <VStack fontFamily={'sans-serif arial'} lineHeight='15px'>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                </VStack>
              </VStack>
            </Box>
            <Box h={'200px'} w={'187px'} borderWidth={"0.5px"} borderColor={'#707070'} borderRadius={'5px'} mt={'10px !important'} >
              <VStack>
                <Text fontFamily={'Haffer-Regular'} fontSize={'15px'} p={1}>Limitation</Text>
                <VStack fontFamily={'Arial'} lineHeight='15px'>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                  <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                </VStack>
              </VStack>
            </Box>
          </Box>
          <Link href='/loginpage'><Button w={'215px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'} mt={'20.8px'} fontSize={'12px'} fontWeight={'100'} fontFamily={'TT Commons Pro Mono Medium'}>ACCESS</Button></Link>
        </VStack>
      </Box>
    </>

  )
}
