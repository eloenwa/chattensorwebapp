import { Box, Image, HStack } from '@chakra-ui/react';
import React from 'react';


//this component will be called on very page 
//it will use useState to conditional render the settings icon if the user is logged in
//also useState will be used to get the users tor credit 

function Header() {
  return (
    <header >
        <Box h={'5vh'} bgColor={'#030B19'} pt={10} pl={10} pr={10}  color={'#FFFFFF'}>
          {/*@ts-ignore the width and height were altered from the design to appear appropriate*/}          
          <HStack justifyContent={'space-between'} >
            <Image src='/chattensor.png' w={'120px'} h={'18px'}/>
            <Box>0.00</Box>
          </HStack>
          
          
        </Box>
    </header>
  )
}

export default Header