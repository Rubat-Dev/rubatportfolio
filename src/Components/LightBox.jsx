import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLockBodyScroll } from "react-use";
import { useAppContext } from "../Context/LightBoxContext";

const LightBox = () => {
  const { selectedObj, selectedIdx, closeLightBox, preSlide, nextSlide } =
  useAppContext();
  useLockBodyScroll(selectedObj != null);

  const appName = selectedObj ? `${selectedObj.cat} ${selectedIdx + 1}` : "";
  const selectedApp = selectedObj?.data[selectedIdx];

  const handleSlide = (e) => {
    if (selectedObj) {
      console.log("ptill");
      switch (e.key) {
        case "ArrowLeft":
          preSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case "Escape":
          closeLightBox();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleSlide);
    return () => {
      window.removeEventListener("keyup", handleSlide);
    };
  }, [selectedIdx]);

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      bg={"rgba(0,0,0,0.9)"}
      position={"fixed"}
      top={0}
      zIndex={selectedObj ? 10 : -10}
      opacity={selectedObj ? 1 : 0}
    >
      <Icon
        cursor={"pointer"}
        pos={"absolute"}
        right={4}
        top={2}
        color={"white"}
        fontSize={30}
        onClick={closeLightBox}
      >
        <IoMdClose />
      </Icon>
      <Icon
        pos={"absolute"}
        left={2}
        top={"50%"}
        transform={"translateY(-50%)"}
        color={"white"}
        fontSize={24}
        bg={"gray.700"}
        px={6}
        py={5}
        cursor={"pointer"}
        onClick={preSlide}
      >
        <FaChevronLeft />
      </Icon>
      <Icon
        pos={"absolute"}
        right={2}
        top={"50%"}
        transform={"translateY(-50%)"}
        color={"white"}
        fontSize={24}
        bg={"gray.700"}
        px={6}
        py={5}
        cursor={"pointer"}
        onClick={nextSlide}
      >
        <FaChevronRight />
        
      </Icon>
      <Box w={"55%"} h={"100%"} bg={"white"} mx={"auto"}>
        <Image
          src={selectedApp?.img}
          w={"100%"}
          h={"88%"}
          objectFit={"contain"}
        />
        <Box p={2}>
          <Text>{appName}</Text>
          <Text>{selectedApp?.desc}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LightBox;
