import React from 'react';
import { Box, HStack, Text, Switch, Input } from '@chakra-ui/react';

//drop down menu that displays when the settings button is clicked on the chatpage


//SVG import 
import LogOutIcon from './logouticon.svg';

function SettingsPopUp() {
    return (
        <Box position={'absolute'} h={'145px'} w={'215px'} zIndex={2} bgColor={'#FFFFFF'} right={'5%'} borderRadius={'20px'} p={2} pl={3} pr={3}>
            <Text fontFamily={'Haffer-Regular'} fontSize={'12px'}>Jacqueline Tasker-Steeves</Text>
            <Text fontFamily={'Haffer-Regular'} fontSize={'8px'} mt={'9px !important'}>jacquelinedawnts@gmail.com</Text>
            <Input h={'22px'} fontFamily={'Haffer-Regular'} fontSize={'10px'} textAlign={'center'} color={'#000000'} placeholder='Enter UID'
                borderRadius={'4px'} borderWidth={'0.5px'} borderColor={'#02020261'} mt={'10px !important'} />
            <Box mt={'9px !important'} alignItems={'center'} width={'100%'} display={'flex'} flexDir={'row'}>
                <Switch size={'sm'} justifySelf={'flex-start'} />
                <Text justifySelf={'center'} textAlign={'center'} fontFamily={'Haffer-Regular'} fontSize={'10px'} w={'70%'} >Advanced Feedback</Text>
            </Box>
            <HStack mt={'9px !important'} alignItems={'center'} w={'100%'} >
                <Box h={'18px'} w={'16px'} justifySelf={'start'}>
                    <LogOutIcon />
                </Box>
                <Text justifySelf={'center'} textAlign={'center'} fontFamily={'Haffer-Regular'} fontSize={'10px'} w={'70%'} >Log out</Text>
            </HStack>
        </Box>
    )
}

export default SettingsPopUp