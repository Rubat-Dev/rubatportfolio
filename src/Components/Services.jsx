import React from "react";
import Head from "./Heading";
import { HStack, VStack } from "@chakra-ui/react";
import ServicesCard from "./ServicesCard";
import { TbDeviceDesktop } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { MdSpeed } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

const serviceCards = [
  {
    icon: <TbDeviceDesktop />,
    title: "Responsive Web Design",
    desc: "Creating beautiful and responsive designs that adapt seamlessly across devices. With a focus on user experience, we ensure that your site looks great on any screen size.",
  },
  {
    icon: <RiReactjsLine />,
    title: "Interactive UI Development",
    desc: "Building interactive and dynamic user interfaces using React.js, GSAP, and JavaScript. We bring your website to life with animations and transitions that engage users.",
  },
  {
    icon: <SiTailwindcss />,
    title: "CSS Framework Integration",
    desc: "Integrating modern CSS frameworks like Tailwind CSS, Chakra UI, and Bootstrap to streamline styling, enhance consistency, and speed up development time.",
  },
  {
    icon: <MdSpeed />,
    title: "Frontend Optimization",
    desc: "Optimizing code, assets, and user interactions to improve website loading speed and performance. We ensure your site provides a smooth, fast experience for all visitors.",
  },
  {
    icon: <BsGithub />,
    title: "Git and Version Control",
    desc: "Managing your project’s code with Git and GitHub for seamless collaboration and reliable version control. We help keep your codebase organized and trackable at every stage.",
  },
  {
    icon: <FiLink />,
    title: "API Integration",
    desc: "Connecting your frontend with external APIs to create seamless data flows and enhance functionality, enabling your website to interact dynamically with real-time data.",
  },
];

const Services = () => {
  return (
    <>
      <VStack className="animate" w={"90vw"} mx={"auto"} id="services">
        <Head
          name="Services"
          desc="Empowering your digital presence with modern, interactive, and visually engaging solutions tailored to your needs"
        />
        <HStack
          w={"90vw"}
          my={10}
          wrap={"wrap"}
          justify={"center"}
          alignItems={"stretch"}
        >
          {serviceCards.map((card, index) => (
            <ServicesCard
              key={index}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </HStack>
      </VStack>
    </>
  );
};

export default Services;
