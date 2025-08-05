import { VStack } from "@chakra-ui/react";
import React from "react";

const VerticleContent = ({ children }) => {
  return (
    <>
      <VStack
        borderLeft={"2px solid #0000ff"}
        pos={"relative"}
        align={"start"}
        color={"gray.500"}
        gap={5}
        pl={5}
        _before={{
          content: "''",
          backgroundColor: "white",
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          border: "2px solid #0000ff",
          position: "absolute",
          top: "0",
          left: "-10px",
        }}
      >
        {children}
      </VStack>
    </>
  );
};

export default VerticleContent;
