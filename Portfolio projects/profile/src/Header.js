
import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode"
import { useMediaQuery } from '@chakra-ui/media-query'
import { Circle, Flex, Stack ,Box,Text,Button,Image} from '@chakra-ui/react';


 function Header() {
  const {colorMode}  = useColorMode();
  const isDark = colorMode === "dark";
//   smallerScreen for responsive page the min width for not a smaller screen is 600px
  // const {isNotSmallerScreen} = useMediaQuery("(min-width-1000px)")
    return (
    <Stack>
        {/* to create a light circle shape in the background */}
        <Circle position="sticky" bg="#74ca1f"  w="50px" h="50px" alignSelf="flex-end" >React</Circle>
        <Circle position="sticky" bg="#259be9"  w="50px" h="50px" alignSelf="flex-start">JS</Circle>
        <Image alignSelf="center" //mt={isNotSmallerScreen ?"0":"12"}}
          //mb={isNotSmallerScreen?"0":"12"}
           borderRadius="full"
          backgroundColor="transparent" boxShadow="lg"
          boxSize="200px" src="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/178614579_493308292023227_159517315752719363_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H1eA4Ei7WSgAX91j2tL&_nc_ht=scontent.fisb1-2.fna&oh=00_AfAN738Wkx8R0NvQhumISwKCYDjrMIqAx0V0wUpLPlmgcA&oe=6402180A">
            
          </Image>
          <Circle position="sticky" bg="#a81836"  w="50px" h="50px" alignSelf="flex-end">HTML</Circle>
          <Circle position="sticky" bg="#29cc60"  w="50px" h="50px" alignSelf="flex-start">CSS</Circle>
        {/* If the device is samller screen then show content in column otherwise show it in column */}
        <Flex 
         //direction={isNotSmallerScreen?"row":"column"}
          spacing="200px" 
        //p={isNotSmallerScreen?"32":"0"}
         alignSelf="flex-start">
            {/* Creating a box  */}
            <Box 
            //mt={isNotSmallerScreen?"0":16}
             allign='flex-start'>
                {/* for printing some text that will define me and my work */}
                <Text fontSize="6xl" fontWeight="bold">i am,</Text>
                <Text fontSize="5xl" fontWeight="semi-bold" bgGradient="linear(to-r,cyan.600,blue.600,purple.100)" bgClip="text">SAAD KHAN</Text>
                <Text color={isDark?"gray.200":"gray.400"}>React, JavaScript, HTML, CSS </Text>
              {/* When click on button linkdin is open instead of this you can also let HR to download CV by clickung the button */}
              <Button margin={8} colorScheme="facebook" onClick={() =>
            window.open("https://www.linkedin.com/in/saad-khan-b41a54244/")}>Hire Me</Button>
            
            </Box>
            
        </Flex>
    </Stack>
  )
}

export default Header;