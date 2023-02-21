import React, { useState } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';




// the chat component will work with props and array.map to populate the right side menu giving the users quick access to their chat history

// declare types for props 
interface ChatName {
    chatname: string;
}

// declare variables for state
interface ChatHistoryStateVar {
    editable: boolean;
}

function ChatHistoryComponent(props: ChatName) {

    const [isEditable, setIsEditable] = useState<ChatHistoryStateVar>({ editable: false });

    return (
        <Box>
            <HStack justifyContent={'space-between'} mt={'50px !important'}>
                <HStack>
                    <Image src='/chaticon.png' alt='stuff' h={'20px'} />
                    <Text className='text-6xl' fontSize={'12px'} fontFamily={'Haffer-Regular'} mr={'37px !important'} contentEditable={isEditable.toString()}>{props.chatname}</Text>
                </HStack>
                <HStack>
                    <Image src='/editicon.png' alt='stuff' h={'20px'} opacity={0.5} _hover={{ opacity: 1 }} onClick={() => setIsEditable(!isEditable)} />
                    <Image src='/delete.png' alt='stuff' h={'20px'} opacity={0.5} _hover={{ opacity: 1 }} />
                </HStack>
            </HStack>
        </Box>
    )
}

export default ChatHistoryComponent