import {
  Button,
  Circle,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Head from "./Heading";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";

const Contact = () => {
  const info = [
    {
      icon: <CiLocationOn />,
      title: "Address",
      desc: "Unit-9 Latifabad Hyderabad",
    },
    {
      icon: <IoCallOutline />,
      title: "Call Us",
      desc: "0317-3893763",
    },
    {
      icon: <SlEnvolope />,
      title: "Email Us",
      desc: "rubatshaikh27@gmail.com",
    },
  ];

  return (
    <VStack w={"90vw"} mx={"auto"} my={12} id="contact" gap={12}>
      <Head
        name="Contact"
        desc="Let's connect and create something beautiful together!"
      />

      {/* Contact Info */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"space-between"}
        gap={6}
        w="full"
      >
        {info.map((item, idx) => (
          <Flex
            key={idx}
            gap={4}
            flexGrow={1}       // equally grow
            w="full"
            bg={"gray.50"}
            p={5}
            rounded={"2xl"}
            align={"center"}
            shadow={"md"}
            transition="0.3s ease"
            _hover={{ shadow: "xl" }}
          >
            <Circle
              color={"teal.500"}
              size={14}
              bg={"teal.100"}
              fontSize={26}
            >
              {item.icon}
            </Circle>
            <VStack gap={1} alignItems={"start"}>
              <Text fontSize={18} fontWeight={"semibold"}>
                {item.title}
              </Text>
              <Text fontSize={{ base: "14px", sm: "16px" }} color={"gray.600"}>
                {item.desc}
              </Text>
            </VStack>
          </Flex>
        ))}
      </Flex>

      {/* Contact Form */}
      <VStack
        w={"100%"}
        maxW="800px"
        p={8}
        gap={5}
        bg={"gray.50"}
        rounded={"2xl"}
        shadow={"lg"}
      >
        <Flex gap={4} w={"full"} direction={{ base: "column", sm: "row" }}>
          <Input
            type="text"
            placeholder="Your Name"
            rounded={"lg"}
            bg={"white"}
            shadow={"sm"}
            _focus={{ borderColor: "teal.400", shadow: "md" }}
          />
          <Input
            type="email"
            placeholder="Your Email"
            rounded={"lg"}
            bg={"white"}
            shadow={"sm"}
            _focus={{ borderColor: "teal.400", shadow: "md" }}
          />
        </Flex>

        <Input
          type="text"
          placeholder="Subject"
          rounded={"lg"}
          bg={"white"}
          shadow={"sm"}
          _focus={{ borderColor: "teal.400", shadow: "md" }}
        />

        <Textarea
          placeholder="Message"
          rounded={"lg"}
          bg={"white"}
          shadow={"sm"}
          rows={6}
          _focus={{ borderColor: "teal.400", shadow: "md" }}
        />

        <Button
          fontSize={{ base: 15, md: 18 }}
          rounded={"full"}
          px={{ base: 6, md: 10 }}
          py={{ base: 4, md: 6 }}
          bg={"teal.400"}
          color="white"
          _hover={{ bg: "teal.500", transform: "scale(1.03)" }}
          transition="0.3s ease"
        >
          Send Message
        </Button>
      </VStack>
    </VStack>
  );
};

export default Contact;
