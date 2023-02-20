import { Box, Image, HStack } from '@chakra-ui/react';
import React from 'react';


//this component will be called on very page 
//it will use useState to conditional render the settings icon if the user is logged in
//also useState will be used to get the users tor credit 

function Header() {
  return (
    <header >
      <Box h={'5vh'} bgColor={'#030B19'} pt={5} pl={"80px"} pr={'80px'} color={'#FFFFFF'}>
        {/*@ts-ignore the width and height were altered from the design to appear appropriate*/}
        <HStack justifyContent={'space-between'} >

          <Image src='/chattensor.png' w={'120px'} h={'18px'} alt={'chattensor logo'} />
          <Box fontFamily={'Haffer-Regular'} fontSize={'20px'}>0.00</Box>
        </HStack>


      </Box>
    </header>
  )
}

export default Header