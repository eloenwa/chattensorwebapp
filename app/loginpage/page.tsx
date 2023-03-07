'use client'

import React, { useEffect } from 'react';
import Header from "../Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, VStack, Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAuth0 } from '@auth0/auth0-react';

//define the input types for the sign in form
interface IFormInput {
  email: String;
  password: string;
}


function LoginPage() {

  //initialize router to handle page redirects
  const router = useRouter();

  //gets register and handleSubmit functions from useForm (react-hook-form library)
  const { register, handleSubmit } = useForm<IFormInput>();

  //this handles the form submit function: 
  const onSubmit: SubmitHandler<IFormInput> = data => AuthenticationFunc(data);

  //This is the authentication function 
  //this function will post a request to the backend to get a session key and route users to the chatpage upon successfull authentication
  async function AuthenticationFunc(data: IFormInput) {
    console.log(data); //data contains email and password details 
    router.push("/chatpage"); //upon authentication this routes users to the chattensor page
  }

  //this is the authentication function for google oauth
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  //this useEffect function will check if the user is authenticated and if they are it will route them to the chatpage
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/chatpage"); //upon authentication this routes users to the chattensor page
    } else {      //if the user is not authenticated it will do nothing   
    }
  }, [isAuthenticated])




  return (
    <>
      <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="92.5vh" alignItems={'center'} justifyContent={'center'}
        color={'#FFFFFF'}>
        <VStack >
          {/* wrap the box below in a button that triggers oauth (google) sign */}
          <Button bgColor={'transparent'} _hover={{ 'backgroundColor': '#90D7EC' }} onClick={(event) => loginWithPopup}>
            <Box fontFamily={'TT Commons Pro Mono Medium'}>Sign in with Google</Box>
          </Button>
          <Box mt={'40px !important'} fontFamily={'Haffer-Regular'} >OR</Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack >
              <Input w={'229px'} h={'39px'} {...register("email")} type={'email'} placeholder='EMAIL' textAlign={'center'} fontSize={'12px'} borderColor={'#FFFFFF61'} mt={'47px !important'} fontFamily={'Haffer-Regular'}></Input>
              <Input w={'229px'} h={'39px'} {...register("password")} type={'password'} placeholder='PASSWORD' textAlign={'center'} fontSize={'12px'} borderColor={'#FFFFFF61'} mt={'28px !important'} fontFamily={'Haffer-Regular'}></Input>
              <Button type={'submit'} w={'215px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'} fontSize={'12px'} mt={'28px !important'} fontWeight={'700'} fontFamily={'TT Commons Pro Mono Medium'}>SIGN IN</Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </>
  )
}

export default LoginPage