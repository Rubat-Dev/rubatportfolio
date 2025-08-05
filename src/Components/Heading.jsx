import React from "react";
import { Heading, Text, VStack } from '@chakra-ui/react'
const Head = ({name,desc}) => {
  return (
    <>
      <VStack gap={5}>
        <Heading fontSize={28} letterSpacing={4}>
          {name}
        </Heading>
        <Text h={"3px"}  w={14} bg={"blue.400"}></Text>
        <Text textAlign={'center'} fontSize={{base:"13px",sm:"16px"}}>
          {desc}
        </Text>
      </VStack>
    </>
  );
};

export default Head;
