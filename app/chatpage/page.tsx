'use client'

import React, { useState } from 'react';
import Header from "../Header";
import { Box, HStack, VStack, Button, Input, Image, Textarea } from '@chakra-ui/react';
import { createIcon } from "@chakra-ui/react";

const Sendicons = createIcon({
  displayName: "Sendicons",
  viewBox: "0 0 48 48",
  d: "M7 38.5v-29L41.4 24zM9.25 35l26.3-11-26.3-11.1v8.4L20.2 24 9.25 26.6zm0 0V12.9v13.7z",
});

function ChatPage() {

  //is state is false the chat section won't be displayed 
  //this is a quick fix for now in the future more logic will be added here to handle the conditional rendering of the chat-tab and populating the chat history
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="95vh" alignItems={'center'} justifyContent={'center'}
        color={'#FFFFFF'}>
        <HStack h={'100%'} w={'100%'}>
          <Box h={'full'} w={'20%'}>
            <VStack>





              <VStack >
                <Button w={'200px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'} mt={'20.8px'} fontSize={'12px'} onClick={() => setToggle(!Toggle)}>NEW CHAT</Button>
                {Toggle === true ?
                  <>
                    <Box fontSize={'12px'} mt={'55px !important'}>CHAT 1</Box>
                    <Box fontSize={'12px'} mt={'55px !important'}>CHAT 2</Box>
                    <Box fontSize={'12px'} mt={'55px !important'}>CHAT 3</Box>
                  </>
                  : NaN}
              </VStack>


            </VStack>
          </Box>
          <Box h={'full'} w={'full'} mr={'80px !important'} m={'10px'} >
            {Toggle === true ?
              <VStack h={'full'}>
                <Box color={'#E8DFDF'} h={'full'} w={'full'}>
                  <Box mb={'40px !important'} mt={'40px'}>Hey, how are you, what does this thing do?</Box>
                  <Box mb={'40px !important'} mt={'40px'}>Not sure, I think I’m a chat bot. Hard to tell.</Box>
                  <Box mb={'40px !important'} mt={'40px'}>Cool, well I don’t know how I am either.</Box>
                  <Box mb={'40px !important'} mt={'40px'}>Makes two of us.</Box>
                </Box>
                <HStack color={'white'} bgColor={'transparent'} w={'100%'} h={'69px'} position={'sticky'} bottom={'0px'} mb={'30px !important'} borderWidth={'0.5px'}
                  alignItems={'center'} borderColor={'#F7F4F4'} borderRadius={"10px"} ml={'38px !important'} mr={'38px !important'} >
                  <Input w={'95%'} borderColor={'transparent'} focusBorderColor='transparent'
                    _hover={{ borderColor: 'transparent' }} h={'full'} resize={'none'}
                    placeholder='Start a chat' color={'#EBE2E2'} ml={'10px !important'} />
                  {/* <Sendicons w={'50px'} h={'25px'} /> */}
                  <Image src='/testicon.png' alt='send icon' mt={'=5px'} w={"40px"} h={'44px'} onClick={() => console.log('click!')} opacity={0.5} _hover={{ opacity: 1 }} />
                </HStack>
              </VStack>
              : ''}
          </Box>
        </HStack>
      </Box>
    </>
  )
}

export default ChatPage