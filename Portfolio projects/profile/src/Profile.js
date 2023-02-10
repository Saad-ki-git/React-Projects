import React from 'react'
import {Box,Text,Flex, Heading} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'

function Profile() {
  const { isNotSmallerScreen } = useMediaQuery('(min-width: 1000px)')

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      <Box alignSelf="center" px="20" py="6">
        <Box mr="auto"></Box>
        <Heading
          fontWeight="extrabold"
          color="cyan.500"
          size="lg"
        >
            2+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="20" py="6">
        <Text fontWeight="bold" fontSize="2xs" > Designer & Developer in Web Development</Text>
      </Box>
    </Flex>
  )
}

export default Profile
