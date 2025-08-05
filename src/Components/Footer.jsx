import { Circle, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
{
  /* <FaXTwitter /> */
}
{
  /* <MdOutlineFacebook /> */
}
{
  /* <CiInstagram /> */
}
{
  /* <FaLinkedin /> */
}
const Footer = () => {
  return (
    <>
      <VStack bg={"#0d6efd"} minH={"30vh"} color={"white"} justify={"center"}>
        <Text display={"flex"} gap={2} fontSize={{base:'13px',sm:"16px"}}>
          © Copyright <Text fontWeight={700}>RubatDev</Text> All Rights Reserved
        </Text>
        <HStack>
          {[
            <FaXTwitter />,
            <MdOutlineFacebook />,
            <FaSquareInstagram />,
            <FaLinkedin />,
          ].map((item, index) => (
            <Circle size={"40px"} fontSize={20} border={'1px solid white'} as={"a"} href="" key={index} transition={'all .3s'} opacity={0.8} _hover={{opacity:1}}>{item}</Circle>
          ))}
        </HStack>
        <Text display={"flex"} fontSize={{base:'13px',sm:"16px"}} letterSpacing={1} gap={2}><Text fontWeight={700}>Desgined By</Text>ChakraUI
         Made</Text>
      </VStack>
    </>
  );
};

export default Footer;
