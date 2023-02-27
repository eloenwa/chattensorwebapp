import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';


//Hambuger menu for mobile view

function HeaderWHamburgerMenu() {
    return (
        <Box>
            <HStack justifyContent={'space-between'} mt={'25px !important'} mb={'25px !important'} ml={'15px !important'} mr={'15px !important'}>
                <Box w={'15px'} h={'15px'} bgColor={'pink'}></Box>
                <Box><Text color={'#FFFFFF'} fontFamily={'TT Commons Pro Mono Medium'} fontSize={'15px'}>NEW CHAT</Text></Box>
                <Box w={'15px'} h={'15px'} bgColor={'pink'}></Box>
            </HStack>
        </Box>

    )
}

export default HeaderWHamburgerMenu