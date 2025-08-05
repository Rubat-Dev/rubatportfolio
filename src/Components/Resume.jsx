import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "./Heading";
import VerticleContent from "./VerticleContent";
import gsap from "gsap";
// import { wrap } from "framer-motion";
const Resume = () => {
  return (
    <>
      <VStack className="animate" mt={20} w={"90vw"} mx={"auto"} py={8}>
        <Head
          name="Resume"
          desc="Committed to delivering impactful digital experiences with skills in React, GSAP animations, and responsive design"
        />
        <Flex direction={{ base: "column", lg: "row" }} align={"center"}>
          <VStack align={"start"} py={20} gap={0} w={{ lg: "50%" }}>
            <Heading fontSize={{ base: 20, md: 28 }}>Education</Heading>
            <VerticleContent>
              <Text
                fontSize={{ base: 18, md: 20 }}
                fontWeight={600}
                letterSpacing={3}
              >
                Bachelor of Computer Science
              </Text>
              <Text color={"black"}>2022 - 2024</Text>
              <Text>Nazareth College</Text> 
              <Text>
              Focused on core computer science principles, including algorithms, data structures, software development, and problem-solving techniques. Developed a strong foundation in programming and analytical skills to tackle complex technical challenges.
              </Text>
            </VerticleContent>
            <VerticleContent>
              <Text
                fontSize={{ base: 18, md: 20 }}
                fontWeight={600}
                letterSpacing={3}
              >
                Web Development Course
              </Text>
              <Text color={"black"}>2022 - 2024</Text>
              <Text>Master G Multimedia</Text>
              <Text>
              Learning the fundamentals of web development, including HTML, CSS, JavaScript, and modern frameworks. 
              </Text>
            </VerticleContent>
            <Heading fontSize={{ base: 20, md: 28 }}>Sumary</Heading>
            <VerticleContent>
              <Text
                fontSize={{ base: 18, md: 20 }}
                fontWeight={600}
                letterSpacing={3}
              >
                Rubat Shaikh
              </Text>
              <Text>
                Experienced Web Designer with a solid grasp of front-end
                technologies, specializing in building visually appealing and
                responsive websites. Skilled in HTML, CSS, and JavaScript, with
                expertise in frameworks like Bootstrap, Tailwind CSS, and Chakra
                UI to craft user-friendly designs. Proficient in animation with
                GSAP and experienced in version control using Git and GitHub
              </Text>
              <VStack as="ul" align={"start"} ps={5}>
                <li>
                  Strong front-end skills: HTML, CSS, JavaScript, Bootstrap,
                  Tailwind CSS, Chakra UI
                </li>
                <li>
                  Proficient in GSAP animations for dynamic user experiences
                </li>
                <li>
                  Experienced with Git and GitHub for version control and
                  collaboration
                </li>
              </VStack>
            </VerticleContent>
          </VStack>
          {/* right div */}
          <VStack align={"start"} w={{ lg: "50%" }} gap={0}>
            <Heading fontSize={{ base: 20, md: 28 }}>
              Professional Experience
            </Heading>
            <VerticleContent>
  <Text fontSize={{ base: 18, md: 20 }} fontWeight={600}>
    Currently Enrolled in Web Development, Master G Multimedia
  </Text>
  <Text color={"black"}>2024 - Present</Text>
  <Text fontWeight={600}>Master G Multimedia</Text>
  <VStack as="ul" align={"start"} ps={5}>
    <li>
      Gaining hands-on experience in front-end technologies like HTML, CSS, and JavaScript.
    </li>
    <li>
      Learning modern frameworks and libraries such as React and Tailwind CSS for responsive design.
    </li>
    <li>
      Engaging in projects to develop visually appealing and user-friendly web interfaces.
    </li>
    <li>
      Emphasis on optimizing website performance and implementing best practices in UI/UX.
    </li>
  </VStack>
</VerticleContent>

            <VerticleContent>
              <Text
                fontSize={{ base: 18, md: 20 }}
                fontWeight={600}
                letterSpacing={3}
              >
                Website Design Specialist
              </Text>
              <Text color={"black"}>2022-2024</Text>
              <VStack as="ul" align={"start"} ps={5}>
                <li>
                Multiple website design projects handled, including homepage layouts, landing pages, and e-commerce sites.
                </li>
                <li>
                Multiple website design projects handled, including homepage layouts, landing pages, and e-commerce sites.
                </li>
                <li>
                Consulted clients on design choices, ensuring the best web design practices were followed.
                </li>
                <li>
                Created and presented over 4 unique website proposals monthly, collaborating with clients and account managers to achieve design alignment and project goals.
                </li>
              </VStack>
            </VerticleContent>
          </VStack>
        </Flex>
      </VStack>
    </>
  );
};
export default Resume;
