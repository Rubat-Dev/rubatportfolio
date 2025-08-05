import {
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const ReviewCard = ({name,work,desc,img}) => {
  return (
    <>
      <Box w={"100%"}  zIndex={1} flexShrink={0}>
      <VStack w={{base:'90%',md:'80%',lg:"50%"}} mx={'auto'}>
        <Image
          src={img}
          w={"100px"}
          h={"100px"}
          rounded={"full"}
          border={"5px lightblue solid"}
        />
        <Text fontSize={"22px"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text fontSize={"16px"} color={"gray.300"}>
          {work}
        </Text>
        <Flex>
          {[1, 1, 1, 1, 1].map((_,idx) => (
            <IoStarSharp key={idx} color={"gold"} fontSize={"20px"} gap={0} />
          ))}
        </Flex>
        <Text textAlign={"center"}>
          <Icon me={2} fontSize={24} color={"gray.400"}>
            <RiDoubleQuotesL />
          </Icon>
            {desc}
          <Icon ml={2} fontSize={24} color={"gray.400"}>
            <RiDoubleQuotesR />
          </Icon>
        </Text>
      </VStack>
      </Box> 
    </>
  )
}

export default ReviewCard
