import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/web-ss/RS.png";

const Navbar = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".logo", {
      opacity: 0,
      scale: 0,
      x: -200,
      ease: "bounce.out",
    }).from(".link", {
      opacity: 0,
      scale: 0,
      stagger: {
        ease: "power2",
        each: 0.2,
      },
    });
  });

  const [isopen, setIsopen] = useState(false);
  let links = [
    {
      path: "",
      name: "Home",
    },
    {
      path: "",
      name: "About",
    },
    {
      path: "",
      name: "Services",
    },
    {
      path: "",
      name: "Portfolio",
    },
    {
      path: "",
      name: "Contact",
    },
  ];
  return (
    <>
      <Flex
        position={"sticky"}
        wrap={"wrap"}
        w={"full"}
        zIndex={2}
        top={0}
        justify={"space-between"}
        px={"5vw"}
        bg={"black"}
        py={4}
        color={"white"}
        align={"center"}
      >
        <Link className="logo">
          <Image
            src={logo}
            w={{ base: "100px", md: "130px" }}
            h={{ base: "30px", md: "45px" }}
          />
        </Link>
        <Icon
          display={{ md: "none" }}
          fontSize={22}
          cursor={"pointer"}
          onClick={() => setIsopen(!isopen)}
        >
          <TiThMenu />
        </Icon>
        <Flex
          h={{ base: isopen ? 200 : 0, md: "auto" }}
          w={{ base: "full", md: "auto" }}
          overflow={"hidden"}
          direction={{ base: "column", md: "row" }}
          as="ul"
          gap={{ base: 2, md: 8 }}
          fontSize={"18px"}
          transition={"all .5s"}
        >
          {links.map((item, index) => (
            <Link key={index} mx={{ base: 4, md: 0 }} href={item.href}>
              {item.name}
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
