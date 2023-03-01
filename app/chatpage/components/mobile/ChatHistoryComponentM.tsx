import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

import DeleteIcon from '../../../assets/deleteiconBlack.svg';

// the chat component will work with props and array.map to populate the right side menu giving the users quick access to their chat history

// declare types for props 
interface ChatName {
    chatname: string;
}


function ChatHistoryComponentM(props: ChatName) {
    return (
        <HStack p={'11px'}>
            <Box h={'20px'} w={'20px'}><DeleteIcon /></Box>
            <Text fontFamily={'TT Commons Pro Mono Medium'}>{props.chatname}</Text>
        </HStack>
    )
}

export default ChatHistoryComponentM