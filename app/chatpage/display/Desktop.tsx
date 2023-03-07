import React, { useState } from 'react';
import { Box, HStack, VStack, Button, Input, Image, Textarea } from '@chakra-ui/react';

import Header from '../components/HeaderWSettings'

import ChatHistoryComponent from '../components/ChatHistoryComponent';
import MainChatComponent from '../components/MainChatComponent';
import SendIcon from '../../assets/sendiconswhite.svg'

function Desktop() {

    //if state is false the chat section won't be displayed 
    //this is a quick fix for now in the future more logic will be added here to handle the conditional rendering of the chat-tab and populating the chat history
    const [Toggle, setToggle] = useState(false);
    return (
        <Box display={['none', 'flex']} flexDir='column' h={'100vh'} bgColor={'#030B19'}>
            <Header />
            <Box bgColor={'#030B19'} display={'flex'} height={'95%'} alignItems={'center'} justifyContent={'center'}
                color={'#FFFFFF'} >
                <HStack h={'full'} w={'100%'} >
                    <Box h={'full'} w={'200px'} ml={'-55px !important'} flexShrink={0}>
                        <VStack>
                            <VStack >
                                <Box w={'100px'} >
                                    <Button fontFamily={'TT Commons Pro Mono Medium'} mt={'20.8px'} fontSize={'12px'} bgColor={'transparent'} _hover={{ color: '#90D7EC' }}
                                        onClick={() => setToggle(!Toggle)}>NEW CHAT</Button>
                                </Box>
                                {/* conditionally renders components when new chat is clicked || logic to be added here to make it work more like chat gpt
                                    || Array.map (state val) will be called here to populate side bar with chat history*/}
                                {Toggle === true ?
                                    <Box >
                                        {/*Since the chat history data is dynamic using a component to render it is appropriate */}
                                        <ChatHistoryComponent chatname='CHAT 1' />
                                        <ChatHistoryComponent chatname='CHAT 2' />
                                        <ChatHistoryComponent chatname='CHAT 3' />
                                    </Box>
                                    : NaN}
                            </VStack>
                        </VStack>
                    </Box>
                    <Box h={'full'} w={'full'} mr={'80px !important'} ml={['135px !important']}>
                        {Toggle === true ?
                            <VStack h={'full'} >
                                <Box color={'#E8DFDF'} h={'full'} w={'full'} overflowY={'scroll'} css={{
                                    '&::-webkit-scrollbar': {
                                        width: '4px',
                                    }, '&::-webkit-scrollbar-track': {
                                        width: '4px',

                                    }, '&::-webkit-scrollbar-thumb': {
                                        background: '#90D7EC',
                                        borderRadius: '5px',
                                    },
                                }}>
                                    {/*Since the conversation history data is dynamic using a component to render it is appropriate || this will be tied to a state that updates with input 
                                    from the user or response from the AI || Array.map (state val) will be called here to populate with conversation history */}
                                    <MainChatComponent text='Hey, how are you, what does this thing do?' bgcolor='white' />
                                    <MainChatComponent text='Not sure, I think I’m a chat bot. Hard to tell.' bgcolor='grey' />
                                    <MainChatComponent text='Cool, well I don’t know how I am either.' bgcolor='white' />
                                    <MainChatComponent text='Makes two of us' bgcolor='grey' />
                                </Box>
                                <HStack color={'white'} bgColor={'#030B19'} w={'100%'} h={'69px'} position={'sticky'} bottom={'0px'} mb={'30px !important'} borderWidth={'0.5px'}
                                    alignItems={'center'} borderColor={'#F7F4F4'} borderRadius={"10px"} ml={'38px !important'} mr={'38px !important'} >
                                    <Input w={'full'} borderColor={'transparent'} focusBorderColor='transparent'
                                        _hover={{ borderColor: 'transparent' }} h={'full'} resize={'none'}
                                        placeholder='Start a chat' color={'#EBE2E2'} ml={'10px !important'} />
                                    {/* Image tag was used to render the icon this will be update to use SVG in the future*/}
                                    {/*<Image src='/testicon.png' alt='send icon' mt={'=5px'} w={"40px"} h={'44px'} onClick={() => console.log('click!')} opacity={0.5} _hover={{ opacity: 1 }} />*/}
                                    <Box w={'35px'} h={'40px'} alignItems={'center'} justifyContent={'center'}
                                        onClick={() => console.log('click!')} opacity={0.5} _hover={{ opacity: 1 }} mr={'20px !important'} mb={'-10px !important'} ><SendIcon /></Box>
                                </HStack>
                            </VStack>
                            : ''}
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}

export default Desktop