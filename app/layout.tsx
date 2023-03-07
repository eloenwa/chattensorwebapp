'use client'
//the use component is neccessary to make use of chakra elememts since it makes use of useState

import * as React from "react"


import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Fonts from './components/fonts';


import { Auth0Provider } from '@auth0/auth0-react';
import { ChatProvider } from './contexts/chat';


const theme = extendTheme({
  fonts: {
    body: `'Haffer-Regular','TT Commons Pro Mono Regular'`
  }
})

console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)

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

        <Auth0Provider domain={process.env.NEXT_PUBLIC_OAUTH_DOMAIN} clientId={process.env.NEXT_PUBLIC_OAUTH_ID} redirectUri={window.location.origin} >
          {/** <ChatProvider> */}
          <ChakraProvider theme={theme} >
            <Fonts />
            <Box h={'100vh'} pl={['0px', '80px']} pr={['0px', '80px']} bgColor={'#030B19'}>{children}</Box>
          </ChakraProvider>
          {/** </ChatProvider> */}
        </Auth0Provider >
      </body>
    </html>
  )
}
