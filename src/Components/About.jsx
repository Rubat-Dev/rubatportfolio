import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Progress,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "./Heading";
// FontAwesome & other icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiGreensock } from "react-icons/si";

import profilePic from "../assets/rubi.jpeg";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: FaHtml5, color: "red.400", value: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "blue.400", value: 85 },
  { name: "JavaScript", icon: FaJs, color: "yellow.400", value: 80 },
  { name: "Bootstrap", icon: FaBootstrap, color: "cyan.400", value: 75 },
  { name: "Tailwind", icon: SiTailwindcss, color: "green.400", value: 95 },
  { name: "Chakra UI", icon: SiChakraui, color: "purple.400", value: 60 },
  { name: "React Js", icon: FaReact, color: "blue.300", value: 90 },
  { name: "GSAP", icon: SiGreensock, color: "red.400", value: 40 },
  { name: "Git / GitHub", icon: FaGitAlt, color: "yellow.400", value: 85 },
];

const About = () => {
  const profile = [
    ["Name", "Rubat Shaikh"],
    ["Profile", "Frontend Developer"],
    ["Email", "rubatshaikh27@gmail.com"],
    ["Phone", "0317389763"],
  ];

  useGSAP(() => {
    gsap.from(".left1", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".left1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
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

    gsap.from(".skill-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <Box my={16} py={8} w={"90vw"} mx={"auto"} boxShadow="dark-lg" px={4} id="about">
      {/* About Section */}
      <Flex
        wrap={"wrap"}
        justifyContent={{ base: "center" }}
        rowGap={10}
        columnGap={{ lg: "10vw" }}
        py={10}
      >
        <VStack
          className="left1"
          width={{ base: "85%", md: "100%", lg: "50%", xl: "45%" }}
          wrap={"wrap"}
          align={"start"}
        >
          <HStack alignItems={"start"} wrap={{ base: "wrap", md: "nowrap" }}>
            <Image
              src={profilePic}
              alt="Rubat Shaikh"
              objectFit={"cover"}
              w={{ base: "full", sm: 300 }}
              mx={"auto"}
              h={400}
              objectPosition={"top"}
            />
            <VStack gap={5}>
              {profile.map((item, key) => (
                <HStack justify={"start"} key={key} w={"100%"}>
                  <Text fontWeight={"bold"} w={"60px"}>
                    {item[0]}:
                  </Text>
                  <Text>{item[1]}</Text>
                </HStack>
              ))}
            </VStack>
          </HStack>
        </VStack>

        <VStack
          className="right1"
          width={{ base: "85%", md: "100%", lg: "35%", xl: "40%" }}
          align={"start"}
          gap={7}
          fontSize={17}
        >
          <VStack align={"start"}>
            <Head
              name="About Me"
              desc="I am a dedicated frontend developer..."
            />
          </VStack>
          <Text>
            I am a dedicated frontend developer with a strong foundation in
            HTML, CSS, and JavaScript, specializing in building interactive,
            responsive, and visually appealing web applications.
          </Text>
          <Text>
            My expertise includes frameworks and libraries such as Tailwind CSS,
            Chakra UI, Bootstrap, and GSAP for animations, along with React.js
            for building scalable, component-driven user interfaces. I have
            experience in version control with Git and GitHub and possess basic
            knowledge of Python.
          </Text>
        </VStack>
      </Flex>

      {/* Skills Section */}
      <Box id="skills" py={12}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Head
            name="My Skills"
            desc="A passionate frontend developer building interactive and responsive web apps using React and modern CSS frameworks."
          />

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={8}
            justifyItems="center"
          >
            {skills.map((skill, i) => (
              <GridItem
                key={i}
                className="skill-card"
                w="90%"
                boxShadow={"lg"}
                bg="gray.200"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255,255,255,0.2)"
                borderRadius="xl"
                p={6}
                textAlign="center"
                _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
              >
                <Icon as={skill.icon} boxSize={12} color={skill.color} mb={4} />
                <Text fontSize="lg" fontWeight="semibold" mb={3}>
                  {skill.name}
                </Text>
                <Progress
                  value={skill.value}
                  colorScheme={skill.color.split(".")[0]}
                  size="sm"
                  borderRadius="full"
                />
                <Text mt={2}>{skill.value}%</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
