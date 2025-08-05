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
  let arr = [
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
    <>
      <VStack w={"90vw"} mx={"auto"} my={10}>
        <Head
          name="Contact"
          desc="Ready to bring your vision to life? Let’s connect and create something exceptional together!"
        />
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "center" }}
          shadow={"lg"}
          gap={3}
          px={4}
          py={8}
          w={"full"}
          mt={10}
        >
          {arr.map((item, idx) => (
            <Flex gap={4} key={idx} flexGrow={{ lg: 1 }}>
              <Circle
                color={"blue.500"}
                size={{ base: "40px", sm: "55px" }}
                border={"1px solid blue"}
                fontSize={{ base: 20, sm: 28 }}
                _hover={{
                  background: "#0d6efd",
                  color: "white",
                  transition: "1s ease",
                  border: "none",
                }}
              >
                {item.icon}
              </Circle>
              <VStack gap={0} alignItems={"start"}>
                <Text fontSize={20} fontWeight={"bold"}>
                  {item.title}
                </Text>
                <Text fontSize={{ base: "13px", sm: "16px" }}>{item.desc}</Text>
              </VStack>
            </Flex>
          ))}
        </Flex>
        <VStack p={{ base: 4, md: 8 }} shadow={"lg"} w={"90vw"} gap={5} mt={5}>
          <Flex gap={4} w={"full"} direction={{ base: "column", sm: "row" }}>
            <Input
              type="text"
              placeholder="Your Name"
              border={"1px solid gray"}
            />
            <Input
              type="email"
              placeholder="Your Email"
              border={"1px solid gray"}
            />
          </Flex>
          <Input
            type="email"
            placeholder="Your Subject"
            border={"1px solid gray"}
          />
          <Textarea placeholder="Message" border={"1px solid gray"} rows={6} />
          <Button
            colorScheme={"blue"}
            fontSize={{base:15,md:18}}
            rounded={"30px"}
            px={{ base: 4, md: 8 }}
            py={{ base: 3, md: 6 }}
            _hover={{
              background: "blue.400",
            }}
          >
            Send Message
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default Contact;
