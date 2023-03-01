import React from 'react';
import { Box, HStack, VStack, Input, Text } from '@chakra-ui/react';
import HeaderWHamburgerMenu from '../components/HeaderWHamburgerMenu';

//This mobile view would have a hamburger icon 
//hamburger icon would be created using the Drawer element from Chakra UI to give it an animation when it is open/closed

function Mobile() {
    return (
        <Box h={'100vh'} w={'full'} display={['flex', 'none']} bgColor={'#030B19'} flexDir={'column'} pb={'22px'}>
            <HeaderWHamburgerMenu />
            <Box color={'white'} h={'full'} display={'flex'} flexDir={'column'} justifyContent={'end'} >
                <VStack overflowY={'scroll'} maxH={'85vh'} h={'full'} fontSize={'15px'} fontFamily={'Haffer-Medium'} flexShrink={1}>
                    <Box bgColor={'#1B1B26'} minH={'68px'} w={'100%'} zIndex={2} display={'flex'} flexDir={'row'} alignItems={'center'} mb={'20px !important'}>
                        <Box w={'33px'} h={'33px'} borderWidth={'0.5px'} borderRadius={'10px'} borderColor={'#D84747'} m={'12px'} />
                        <Text>Hi, How are you?</Text>
                    </Box>
                    <Box bgColor={'#1B1B26'} minH={'68px'} w={'100%'} zIndex={2} display={'flex'} flexDir={'row'} alignItems={'center'} mb={'20px !important'}>
                        <Box w={'33px'} h={'33px'} borderWidth={'1px'} borderRadius={'10px'} borderColor={'#FFFFFF'} m={'12px'} />
                        <Text>Goooood. You?</Text>
                    </Box>
                </VStack>
                <Input position={'relative'} bottom={0} h={'51px'} />
            </Box>
        </Box>
    )
}

export default Mobile