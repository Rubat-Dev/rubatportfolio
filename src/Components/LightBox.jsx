import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useLockBodyScroll } from "react-use";
import { useAppContext } from "../Context/LightBoxContext";

const LightBox = () => {
  const { selectedObj, selectedIdx, closeLightBox } = useAppContext();
  useLockBodyScroll(selectedObj != null);

  const appName = selectedObj ? `${selectedObj.cat} ${selectedIdx + 1}` : "";
  const selectedApp = selectedObj?.data[selectedIdx];

  // ✅ Sirf Escape key press se close hone ka handler
  const handleCloseKey = (e) => {
    if (e.key === "Escape") closeLightBox();
  };

  useEffect(() => {
    window.addEventListener("keyup", handleCloseKey);
    return () => {
      window.removeEventListener("keyup", handleCloseKey);
    };
  }, []);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="rgba(0,0,0,0.9)"
      position="fixed"
      top={0}
      zIndex={selectedObj ? 10 : -10}
      opacity={selectedObj ? 1 : 0}
    >

      {/* Image & Details */}
      <Box w="55%" h="100%" bg="white" mx="auto">
        <Image
          src={selectedApp?.img}
          w="100%"
          h="88%"
          objectFit="contain"
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
