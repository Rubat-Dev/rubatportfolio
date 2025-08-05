import { Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const Counter = () => {
  const [progress, setProgress] = useState(0);
  const step = 0.02;
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        let newProgress = Math.min(prevProgress + step, 1);
        if(newProgress == ~1){
            clearInterval(timer)
        }
        return newProgress;
      });
    }, 100); 
  useEffect(() => {
    const step = 0.02;
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        let newProgress = Math.min(prevProgress + step, 1);
        if(newProgress == 1){
            clearInterval(timer)
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let counters = [
    {
      limit: 232,
      name: "client",
    },
    {
      limit: 521,
      name: "projects",
    },
    {
      limit: 1453,
      name: "Hours Of Support",
    },
    {
      limit: 32,
      name: "Awards",
    },
  ];

  return (
    <>
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={"center"}
        h={"70vh"}
        position={"relative"}
        color={"white"}
        bg={
          "url(https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHRlYW18ZW58MHx8MHx8fDA%3D)"
        }
        bgSize={"cover"}
        bgPos={"0px -200px"}
        _before={{
          content: '""',
          backgroundColor: "rgba(0, 120, 255, 0.5)",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }}
      >
        {
        counters.map((item, idx) => (
          <VStack gap={0} key={idx} flex={1} zIndex={"1"}>
            <Text fontSize={"40px"} fontWeight={"bold"}>
              {
                Math.round(progress * counters[idx].limit)
              }
            </Text>
            <Text fontSize={{ base: "14px", md: "20px" }} color={"gray.300"}>
              {item.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </>
  );
};
export default Counter;
