import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      minW={"200px"}
      maxW={"500px"}
      rounded={"lg"}
      p={5}
      boxShadow={"md"}
      bg={"white"}
      m={4}
    >
      <Image src={imageSrc} alt={title} />
      <Heading color="black" as="h3" size="lg" mt={4}>
        {title}
      </Heading>
      <Text color="black" mt={2}>{description}</Text>
      <Stack isInline align="center" mt={4}>
        <Text color="black" fontWeight="bold">Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </Stack>
    </Box>
  );
};

export default Card;
