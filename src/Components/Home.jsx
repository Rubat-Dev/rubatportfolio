import { Heading, VStack } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Home = () => {  
useGSAP(()=>{
  gsap.from(".animate",{
    opacity:0,
    y:200,
    duration:1.3,
    
  })
});

  const [text] = useTypewriter({
    words: [
      "React Developer",
      "Web Designer",
      "Responsive Expert",
      "Python Developer",
    ],
    loop: true,
    // typeSpeed:50,
    // delaySpeed:4000,
    //deleteSpeed={50},
  });

  return (
    <>
      <VStack
      id="home"
        h={{base:"50vh",sm:"88vh"}}
        bg={"black"}
        color={"white"}
        bgImage={
          "url(https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }
        backgroundSize={"cover"}
        backgroundPosition={{base:"center",md:"0px -30px",lg:"0px -90px"}}
      >
        <VStack className="animate">
        <Heading fontSize={"5vw"}>Hi, I'm Rubat Shaikh</Heading>
        <Heading fontSize={{base:"16px",md:"28px"}}>
          {text}
          <Cursor />
        </Heading>
        </VStack>
      </VStack>
    </>
  );
};

export default Home;
