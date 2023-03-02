import React from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import CollapsibleTextM from '../components/CollapsibleTextM';
import { useRouter } from 'next/navigation';



function Mobile() {

    //initialize router to handle page redirects
    const router = useRouter();





    return (
        <Box w={'100%'} bgColor={'#030B19'} display={['flex', 'none']} flexDir={'column'} color={'#ffff'}>
            <VStack>
                <Text mb={'40px !important'} mt={'40px !important'} fontSize={'20px'}>Limitations</Text>
                <CollapsibleTextM />
                <CollapsibleTextM />
                <CollapsibleTextM />
            </VStack>
            <VStack>
                <Text mb={'40px !important'} mt={'40px !important'} fontSize={'20px'}>Capabilities</Text>
                <CollapsibleTextM />
                <CollapsibleTextM />
                <CollapsibleTextM />
            </VStack>
            <Button h={'42px'} w={'230px'} borderRadius={'20px'}
                alignSelf={'center'}
                borderWidth={'0.75px'} bgColor={'transparent'}
                mb={'40px !important'} mt={'40px !important'}
                fontSize={'12px'} onClick={() => router.push('/loginpage')}
                fontFamily={'TT Commons Pro Mono Medium'}
                flexShrink={0}
                sx={{ '-webkit-tap-highlight-color': 'transparent' }}

            >ACCESS</Button>
        </Box>
    )
}

export default Mobile