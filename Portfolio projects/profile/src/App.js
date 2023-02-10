
import { Flex, Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react'
import {FaGithub,FaSun,FaMoon,FaLinkedin } from "react-icons/fa";
import React from 'react'
import Header from './Header.js';
import Social from './Social.js'
import Profile  from './Profile.js';


function App () {
  const { colorMode, toggleColorMode} = useColorMode();
  const isDark =  colorMode === "dark";
  return (
    <>
    <VStack p={10}>
      <Flex w="100%">
        <IconButton height="2" ml={4} isRound='false' icon={<FaGithub></FaGithub>} onClick="https://pk.linkedin.com/"></IconButton>
        <IconButton height="2" ml={4} isRound='false' icon={<FaLinkedin></FaLinkedin>} onClick="https://github.com/"></IconButton>
        <IconButton height="2" ml={4} isRound='true' icon={isDark?<FaSun></FaSun>:<FaMoon></FaMoon>} onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header />
        <Profile />
        <Social />
    </VStack>
    
    </>
    
  )
}

export default App