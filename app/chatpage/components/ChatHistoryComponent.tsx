import React, { useState } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import DeleteIcon from '../../assets/deleteicon.svg';
import EditIcon from '../../assets/editicon.svg';




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

    const [isEditable, setIsEditable] = useState(false);

    return (
        <Box>
            <HStack justifyContent={'space-between'} mt={'50px !important'}>
                <HStack>
                    <Image src='/chaticon.png' alt='stuff' h={'20px'} />
                    <Text maxW={'75px'} fontSize={'12px'} whiteSpace={'nowrap'}
                        fontFamily={'Haffer-Regular'} textOverflow={'clip'} mr={'5px !important'} overflowX={'hidden'}
                        contentEditable={isEditable}>{props.chatname}</Text>
                </HStack>
                <HStack>
                    <Box h={'22px'} w={'22px'} opacity={0.5} _hover={{ opacity: 1, borderWidth: '1px', borderColor: '#fff' }} onClick={() => setIsEditable(!isEditable)} ><EditIcon /></Box>
                    <Box h={'22px'} w={'22px'} opacity={0.5} _hover={{ opacity: 1, borderWidth: '1px', borderColor: '#fff' }}><DeleteIcon /></Box>
                </HStack>
            </HStack>
        </Box>
    )
}

export default ChatHistoryComponent