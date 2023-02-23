import { Box, Image, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import TaoLogo from '../../TAO_white.svg';
import SettingsIcon from './settingsicon.svg';
import SettingsPopUp from './SettingsPopUp';




//this component will be called on the chatpage 
//also useState will be used to get the users tor credit 

function Header() {

  //state to handle settings drop down menu display
  const [displaySettingMenu, setDisplaySettingMenu] = useState(false)

  return (
    <header >
      <Box h={'5vh'} bgColor={'#030B19'} pt={5} color={'#FFFFFF'}>
        {/*@ts-ignore the width and height were altered from the design to appear appropriate*/}
        <HStack w={'100%'} justifyContent={['center', 'space-between']}>
          <Box w={['fill', '16%']} alignItems={'center'} justifyContent={'center'} display={'flex'} alignSelf={['flex-start', 'center']}>
            <Image src='/chattensor.png' w={'120px'} h={'18px'} alt={'chattensor logo'} />
          </Box>
          <Box w={'16%'} fontFamily={'Haffer-Regular'} fontSize={'20px'} flexDirection={'row'}
            alignItems={'center'} alignSelf={'end !important'} justifyContent={'center'} display={['none', 'flex']}>
            <Box h={'14px'} display={'flex'} w={'10px'} alignItems={'flex-end'} mr={'2px !important'}><TaoLogo /></Box>
            <Text>0.00</Text>
            <Box h={'20px'} w={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} ml={'17px !important'} _hover={{ borderWidth: '1px' }}
              onClick={() => setDisplaySettingMenu(!displaySettingMenu)}>

              <SettingsIcon />
            </Box>
          </Box>
        </HStack>
      </Box>
      {displaySettingMenu === true ?
        <>
          <SettingsPopUp />
        </>
        : ''}

    </header>
  )
}

export default Header;

