import React from 'react';
import { Box, HStack } from '@chakra-ui/react';


//this component will work with array.map to populate the main chat page (i.e. where users and AI converse)

// declare types for props 
interface ChatObj {
    text: string;
    bgcolor: string
}
function MainChatComponent(props: ChatObj) {
    return (
        <HStack alignItems={'center'} mt={'40px !important'} mb={'40px !important'} overflow={'hidden'}>
            <Box w={'36px'} h={'36px'} bgColor={props.bgcolor} borderRadius={'10px'} flexShrink={0} />
            <Box ml={'60px !important'} fontFamily={'Haffer-Medium'} fontSize={'16px'}>{props.text}</Box>
        </HStack>
    )
}

export default MainChatComponent