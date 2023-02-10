import { HStack,Icon,Box,Circle, Flex } from '@chakra-ui/react'

import React from 'react'
import {FaFacebook,FaGoogle,FaWhatsapp,} from 'react-icons/fa'

function Social() {
  return (
   < >
   <Flex  spacing={5}>
   <Box display="flex" justifyContent="flex-end">
   <Circle 
   mr={5}
     bg="#a81836"
     w="50px"
     h="100px"
     as={FaGoogle}
     boxSize="60"
   />
   <br></br>
   <Circle
   mr={5}
     bg="#3b5998"
     w="50px"
     h="100px"
     as={FaFacebook}
     boxSize="60"
   />
   
  
    <Circle
     bg="#25d366"
     w="50px"
     h="100px"
     as={FaWhatsapp}
     boxSize="60"
   />
   </Box>
 </Flex>
 </>
      
  )
}

export default Social