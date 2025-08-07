import { Box, Flex, HStack, Heading, Image, Progress, Text, VStack } from "@chakra-ui/react";
import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import profilePic from '../assets/rubi.jpeg';
const About = () => {
  useGSAP(() => {
    // Animate elements with ScrollTrigger
    gsap.from(".left1", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ScrollTrigger: {
        trigger: ".left1",
        start: "top 80%", 
        toggleActions: "play none none reverse", 
      },
    });
  });
    gsap.from(".right1", {
      opacity: 0,
      x: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".right1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  // })
  //   gsap.fromTo(
  //     bar,
  //     { value: 0 }, // Start value
  //     {
  //       value: progressValues[index], // End value from the progressBars array
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: bar,
  //         start: "top 80%", // Start animation when the bar is at 80% from the top
  //         end: "top 60%", // End when it reaches 60%
  //         scrub: true, // Smooth animation on scroll
  //         markers: true, // Debugging markers (remove in production)
  //       },
  //     }
  //   );
  let obj = {
    Name: "Rubat Shaikh",
    Profile: "Frontend Developer",
    Email: "rubatshaikh27@gmail.com",
    Phone: "0317389763",
  };
  let profile = Object.entries(obj);
  let progressBars = [
    {
      progress: 100,
      name:"HTML",
    },
    {
      progress: 93,
      name:"CSS",
    },
    {
      progress: 75,
      name:"JAVASCRIPT",
    },
    {
      progress: 70,
      name:"REACT'JS",
    },
    {
      progress: 50,
      name:"Git github",
    },
    {
      progress: 90,
      name:"Bootstrap",
    },
    {
      progress: 95,
      name:"Tailwind Css",
    },
    {
      progress: 85,
      name:"Chakra Ui",
    },
    {
      progress: 40,
      name:"Gsap",
    },
    {
      progress: 50,
      name:"python",
    }
  ]

   return (
    <Box my={16} py={8} w={"90vw"}  mx={"auto"} boxShadow="dark-lg" px={4}>
    <Flex wrap={'wrap'} justifyContent={{base:"center"}} rowGap={10} columnGap={{lg:"10vw"}}>
      <VStack  className="left1" width={{base:"85%",md:'100%', lg:"50%",xl:"45%"}} wrap={'wrap'} align={'start'}>
        <HStack alignItems={'start'} wrap={{base:'wrap',md:"nowrap"}}>
          <Image  src={profilePic} objectFit={'cover'} w={{base:'full',sm:300}} mx={'auto'} h={400} objectPosition={'top'}/>
          <VStack gap={5}>
            {profile.map((item, key) => (
              <HStack justify={'start'} key={key} w={'100%'}>
                <Text fontWeight={"bold"} w={"60px"}>{item[0]}:</Text> 
                <Text >{item[1]}</Text>
              </HStack>
            ))}
          </VStack>
        </HStack>
      </VStack>
      <VStack className="right1" width={{base:"85%",md:'100%',lg:"35%",xl:"40%"}} align={'start'} gap={7} fontSize={17}>
        <VStack align={'start'}>
          <Heading mt="-10px" >About me</Heading>
          <Text w={20} h={"2px"} bg={"blue.400"}></Text>
        </VStack>
        <Text>I am a dedicated frontend developer with a strong foundation in HTML, CSS, and JavaScript, specializing in building interactive, responsive, and visually appealing web applications.</Text>
        <Text>
        My expertise includes frameworks and libraries such as Tailwind CSS, Chakra UI, Bootstrap, and GSAP for animations, along with React.js for building scalable, component-driven user interfaces. 
          I have experience in version control with Git and GitHub and possess basic knowledge of Python</Text>
       </VStack>
       </Flex>
       
          <Heading fontSize={28} my={4} textAlign={{base:"center",lg:"left"}} mx={{base:'auto',md:'3'}}>Skills</Heading>
       <HStack align={'left'} w={{base:'85%',md:'100%'}} mx={{base:'auto',md:'2'}} columnGap={'20px'} wrap={'wrap'}>
              {
                progressBars.map((item,index)=>(
                  <Box key={index} w={{base:"100%",md:"45%"}} flexGrow={1}>
                  <HStack justify={'space-between'}>
                    <Text>{item.name}</Text>
                    <Text>{item.progress}%</Text>
                  </HStack>
                  <Progress value={item.progress} />
                   </Box>
                ))
              }
        </HStack>
    </Box>
  );
};
export default About