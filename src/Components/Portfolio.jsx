import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Head from "./Heading";
import React, { useState } from "react";
import PortfolioCards from "./PortfolioCards";
import { useAppContext } from "../Context/LightBoxContext";

const Portfolio = () => {

  const {projects} = useAppContext();
  const [active, setActive] = useState("ALL");
  const filterBtns = ["ALL", "HTML/CSS", "BOOTSTRAP", "TAILWIND","React+TailwindCSS","React+ChakraUI"];

  const arr2 = projects.flatMap(project=>project.data.map((item,i)=>({...item,name:`${project.cat} ${i+1}`,index:i})));


  return (
    <>
      <VStack w={"90vw"} mx={"auto"} mt={10} id="portfolio">
        <Head
          name="Portfolio"
          desc="Explore a showcase of creativity and craftsmanship, where each project tells a story of innovation and skill"
        />
      </VStack>
      <Flex justify={"center"} mt={10} mx={2}>
        {filterBtns.map((item, idx) => (
          <Button
            key={idx}
            fontSize={{base:"13px",md:"17px"}}
            fontWeight={"bold"}
            bg={"transparent"}
            color={active == item ? "blue.500" : ""}
            onClick={() => setActive(item)}
            _hover={{
              color: "blue.500",
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
      <HStack w={"90vw"} my={5} mx={"auto"} wrap={"wrap"} gap={10}>
        {arr2.map((item, idx) => (
          <PortfolioCards key={idx} {...item} activeCat={active}  />
        ))}
      </HStack>
    </>
  );
};
export default Portfolio;
