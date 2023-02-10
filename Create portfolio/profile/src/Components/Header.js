import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav   id="link">
          <a spacing={5} style={{fontWeight: 'bold'}}  href="https://github.com/Saad-ki-git">
          <FontAwesomeIcon icon={faGithub} size="2xl" /> 
          </a>
           
            <a style={{fontWeight: 'bold'}} href="https://www.linkedin.com/in/saad-khan-b41a54244/"> <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            
             </a>
          </nav>
          <nav>
            <HStack spacing={8}>
            <a onClick={ handleClick} style={{ color:"#1191d0",fontWeight: 'bold'}} id="contactme-section"  href="/#contact-me">Contact Me</a>
            <a onClick={ handleClick} style={{ color:"#1191d0",fontWeight: 'bold'}} id="projects-section"  href="/#projects-me">Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
