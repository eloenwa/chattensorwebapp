'use client'
//the use component is neccessary to make use of chakra elememts since it makes use of useState

import * as React from "react"


import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Fonts from './components/fonts';


const theme = extendTheme({
  fonts: {
    body: `'TT Commons Pro Mono Regular','Haffer-Regular'`
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/*wraps all components with chakra provider this let's us use chakra elements in our subcomponents*/}
      <body>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Box h={'100%'} pl={['10px', '80px']} pr={['10px', '80px']} bgColor={'#030B19'}>{children}</Box>
        </ChakraProvider>
      </body>
    </html>
  )
}
