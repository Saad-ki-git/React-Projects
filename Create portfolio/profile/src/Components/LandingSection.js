import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
  <Avatar style={{width:"200px" ,height:"200px"}} src="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/178614579_493308292023227_159517315752719363_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H1eA4Ei7WSgAX91j2tL&_nc_ht=scontent.fisb1-2.fna&oh=00_AfDMFCc7kgzo2JmApRTP4uvYZbF0xFUuRpDZK1vZZuUUPA&oe=6402C0CA"  />
  <Heading>Hello! I am Saad Khan</Heading>
  <Heading>I am WebDeveloper</Heading>
  <Heading>In React</Heading>
  </VStack>
  </FullScreenSection>
  
);

export default LandingSection;
