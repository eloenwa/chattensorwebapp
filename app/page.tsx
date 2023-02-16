'use client'
import { Box, HStack, VStack,Button } from '@chakra-ui/react';
import Header from './Header';

//this is the main page users will be routed here on page load. 


export default function Home() {
  return (
    <>
    <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="95vh" alignItems={'center'} justifyContent={'center'} 
      color={'#FFFFFF'}>
      {/* @ts-ignore  this is here because tyscript throws error lines for chakra components like VStack */}
      <VStack>
        <HStack>
          <Box h={'200px'} w={'187px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,  nibh.  </Box>
          <Box h={'200px'} w={'187px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,  nibh.  </Box>
        </HStack>
        <Button w={'215px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'}>Access</Button>
      </VStack>   
    </Box>
    </>
  
  )
}
