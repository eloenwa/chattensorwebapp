'use client'

import React from 'react';
import Header from "../Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, VStack, Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

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



  return (
    <>
      <Header />
      <Box bgColor={'#030B19'} display={'flex'} height="92.5vh" alignItems={'center'} justifyContent={'center'}
        color={'#FFFFFF'}>
        <VStack >
          {/* wrap the box below in a button that triggers oauth (google) sign */}
          <Box fontFamily={'TT Commons Pro Mono Medium'}>Sign in with Google</Box>
          <Box mt={'40px !important'} fontFamily={'Haffer-Regular'}>or</Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack >
              <Input w={'229px'} h={'39px'} {...register("email")} type={'email'} placeholder='Email' textAlign={'center'} fontSize={'12px'} borderColor={'#FFFFFF61'} mt={'47px !important'} fontFamily={'Haffer-Regular'}></Input>
              <Input w={'229px'} h={'39px'} {...register("password")} type={'password'} placeholder='Password' textAlign={'center'} fontSize={'12px'} borderColor={'#FFFFFF61'} mt={'28px !important'} fontFamily={'Haffer-Regular'}></Input>
              <Button type={'submit'} w={'215px'} h={'42px'} borderRadius={'20px'} bgColor={'#000000'} fontSize={'12px'} mt={'28px !important'} fontFamily={'TT Commons Pro Mono Medium'}>SIGN IN</Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </>
  )
}

export default LoginPage