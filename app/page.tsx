'use client'
import { Box, HStack, VStack,Button, Text } from '@chakra-ui/react';
import Header from './Header';
import Link from 'next/link';

//this is the main page users will be routed here on page load. 


export default function Home() {
  return (
    <>
    <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="95vh" alignItems={'center'} justifyContent={'center'} 
      color={'#FFFFFF'}>
      {/* @ts-ignore  this is here because tyscript throws error lines for chakra components like VStack */}
      <VStack>
        <HStack fontSize={'12px'} w={'394px'} justifyContent={'space-between'}>
          <Box h={'200px'} w={'187px'} borderWidth={"0.5px"} borderColor={'#707070'} borderRadius={'5px'} >
            {/* @ts-ignore  this is here because tyscript throws error lines for chakra components like VStack */}
            <VStack>
              <Text fontSize={'15px'} p={1}>Capabilities</Text>
              <VStack fontFamily={'sans-serif arial'} lineHeight= '15px'>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
              </VStack>
            </VStack>
          </Box>
          <Box h={'200px'} w={'187px'} borderWidth={"0.5px"} borderColor={'#707070'} borderRadius={'5px'} >
            {/* @ts-ignore  this is here because tyscript throws error lines for chakra components like VStack */}
            <VStack>
              <Text fontSize={'15px'} p={1}>Limitation</Text>
              <VStack fontFamily={'sans-serif arial'} lineHeight= '15px'>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                <Text pl={'11px'} pr={'11px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
              </VStack>
            </VStack>
          </Box>          
        </HStack>
        <Button w={'215px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'} mt={'20.8px'} fontSize={'12px'}><Link href='/loginpage'>Access</Link></Button>
      </VStack>   
    </Box>
    </>
  
  )
}
