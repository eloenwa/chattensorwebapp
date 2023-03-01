import React from 'react';
import {
    Box, HStack, Text, useDisclosure, Input, Switch,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons';

import { useRouter } from 'next/navigation';

import ChatHistoryComponentM from './mobile/ChatHistoryComponentM';

import LogOutIcon from '../../assets/logouticon.svg'

//Hambuger menu for mobile view

function HeaderWHamburgerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    //initialize router to handle page redirects
    const router = useRouter();

    //This is the authentication function 
    //this function will post a request to the backend to get a session key and route users to the chatpage upon successfull authentication
    async function logOutFunc() {
        console.log('logout'); //data contains email and password details 
        router.push("/"); //upon authentication this routes users to the chattensor page
    }

    return (
        <Box>
            <HStack justifyContent={'space-between'} mt={'25px !important'} mb={'25px !important'} ml={'15px !important'} mr={'15px !important'}>
                <HamburgerIcon color={'white'} onClick={onOpen} w={'15px'} h={'15px'} />
                <Box><Text color={'#FFFFFF'} fontFamily={'TT Commons Pro Mono Medium'} fontSize={'15px'}>NEW CHAT</Text></Box>
                {/** add logic(function to start new chat when the AddIcon is pressed) */}
                <AddIcon w={'15px'} h={'15px'} color={'white'} />
            </HStack>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent p={-2}>
                    <DrawerHeader>
                        <Box w={'100%'} h={'50px'} display={'flex'} flexDir={'row'}
                            alignItems={'center'} borderWidth={'0.25px'} borderColor={'#000000'} borderRadius={'4px'}>
                            <AddIcon w={'15px'} h={'15px'} color={'black'} m={'15px !important'} />
                            <Text color={'#000000'} fontFamily={'TT Commons Pro Mono Medium'} fontSize={'15px'}>NEW CHAT</Text>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody>
                        {/* array.map will be used here to populate the chat history column with previous conversation titles by 
                        swapping out CHAT 1 for state.chatTitle...*/}
                        <ChatHistoryComponentM chatname='CHAT 1' />
                        <ChatHistoryComponentM chatname='CHAT 1' />
                        <ChatHistoryComponentM chatname='CHAT 1' />
                    </DrawerBody>
                    <DrawerFooter display={'flex'} flexDir={'column'} alignItems={'flex-start'}>
                        <Text fontFamily={'Haffer-Regular'} fontSize={'18px'}>Jacqueline Tasker-Steeves</Text>
                        <Text fontFamily={'Haffer-Regular'} fontSize={'12px'}>jacquelinedawnts@gmail.com</Text>
                        <Box mt={'30px !important'} alignItems={'center'} width={'100%'} display={'flex'} flexDir={'row'}>
                            <Switch size={'sm'} justifySelf={'flex-start'} />
                            <Text ml={'15px !important'} fontFamily={'Haffer-Regular'} fontSize={'12px'} w={'70%'} >ADVANCED FEATURES</Text>
                        </Box>
                        <HStack mt={'30px !important'} alignItems={'center'} w={'100%'} >
                            <Box h={'25px'} w={'25px'} display={'flex'} alignItems={'center'}>
                                <Box h={'20px'} w={'20px'} justifySelf={'start'} _hover={{ borderWidth: '1px' }} onClick={() => logOutFunc()}>
                                    <LogOutIcon />
                                </Box>
                            </Box>
                            <Text ml={'15px !important'} fontFamily={'Haffer-Regular'} fontSize={'12px'} w={'70%'} >LOGOUT</Text>
                        </HStack>
                        <Input w={'100%'} h={'50px'} fontFamily={'TT Commons Pro Mono Medium'} fontSize={'12px'} textAlign={'center'} color={'#000000'} placeholder='Enter UID'
                            borderRadius={'4px'} borderWidth={'0.5px'} borderColor={'#000000'} mt={'40px !important'} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>

    )
}

export default HeaderWHamburgerMenu