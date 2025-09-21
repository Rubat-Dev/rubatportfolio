import { Circle, HStack, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    { icon: <FaXTwitter />, href: "#" },
    { icon: <MdOutlineFacebook />, href: "#" },
    { icon: <FaSquareInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
  ];

  return (
    <VStack
      bgGradient="linear(to-r, #0d6efd, #0a58ca)"
      color={"white"}
      justify={"center"}
      py={10}
      spacing={5}
    >
      <Text fontSize={{ base: "13px", sm: "16px" }} letterSpacing={0.5}>
        © <Text as="span" fontWeight={700}>RubatDev</Text> All Rights Reserved
      </Text>

      <HStack spacing={4}>
        {socialIcons.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            isExternal
            _hover={{ transform: "scale(1.1)", opacity: 1 }}
          >
            <Circle
              size={"45px"}
              fontSize={22}
              border={"1px solid white"}
              bg="whiteAlpha.200"
              opacity={0.8}
              transition="all 0.3s ease"
              _hover={{ bg: "whiteAlpha.400", opacity: 1 }}
              cursor="pointer"
            >
              {item.icon}
            </Circle>
          </Link>
        ))}
      </HStack>

      <Text
        fontSize={{ base: "13px", sm: "16px" }}
        letterSpacing={1}
        textAlign="center"
      >
        Designed with <Text as="span" fontWeight={700}>ChakraUI</Text> & Made by Rubat
      </Text>
    </VStack>
  );
};

export default Footer;
