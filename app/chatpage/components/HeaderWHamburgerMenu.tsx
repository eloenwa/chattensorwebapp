import React from 'react';
import {
    Box, HStack, Text, useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';


//Hambuger menu for mobile view

function HeaderWHamburgerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <HStack justifyContent={'space-between'} mt={'25px !important'} mb={'25px !important'} ml={'15px !important'} mr={'15px !important'}>
                <Box w={'15px'} h={'15px'} bgColor={'pink'} onClick={onOpen}></Box>
                <Box><Text color={'#FFFFFF'} fontFamily={'TT Commons Pro Mono Medium'} fontSize={'15px'}>NEW CHAT</Text></Box>
                <Box w={'15px'} h={'15px'} bgColor={'pink'}></Box>
            </HStack>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>NEW CHAT</DrawerHeader>
                    <DrawerBody>
                        <p>CHAT 1</p>
                    </DrawerBody>
                    <DrawerFooter>
                        <p>CHAT 1</p>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>

    )
}

export default HeaderWHamburgerMenu