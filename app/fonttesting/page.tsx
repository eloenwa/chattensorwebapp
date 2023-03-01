'use client'

import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

function FontTest() {
    return (
        <Box h={'100vh'} color={'white'} p={50}>
            <Text>This is TT Commons pro Reg then Medium</Text>
            <Text >Hello World </Text>
            <Text fontFamily={'TT Commons Pro Mono Medium'}>The quick brown fox jumps over the lazy dog is an
                English-language pangram — a sentence that contains
                all the letters of the alphabet</Text>
            <br></br>

            <Text>This is Haffer Reg then Semibold</Text>
            <Text fontFamily={'Haffer-Regular'}>Hello World </Text>
            <Text >The quick brown fox jumps over the lazy dog is an
                English-language pangram — a sentence that contains
                all the letters of the alphabet
            </Text>
        </Box>
    )
}

export default FontTest