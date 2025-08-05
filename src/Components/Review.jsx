import { Box, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
   let timeout = setTimeout(changeSlide, 3000);
  clearTimeout(timeout)
  }, [currentSlide]);



  const testimonials = [
    {
      name: "Saul Goodman",
      work: "Ceo & Founder",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!",
      img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-1.jpg",
    },
    {
      name: "Sara Wilsson",
      work: "Designer",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!",
      img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-2.jpg",
    },
    {
      name: "Matt Brandon",
      work: "Freelancer",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!",
      img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-2.jpg",
    },
  ];
  const imgLink =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <VStack
      position={"relative"}
      h={"80vh"}
      bg={`linear-gradient(rgba(7, 108, 221, .7), rgba(7, 108, 221, .7)), url(${imgLink})`}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
      bgPos={"center"}
      textColor={"white"}
      my={10}
      overflow={"hidden"}
    >
      <HStack
        gap={0}
        boxSize={"100%"}
        transition={"all 1s"}
        transform={`translateX(-${currentSlide}00%)`}
      >
        {testimonials.map((item, idx) => (
          <ReviewCard key={idx} {...item} />
        ))}
      </HStack>
      <HStack pos={"absolute"} bottom={10}>
        {testimonials.map((_, idx) => (
          <Box
            cursor={"pointer"}
            key={idx}
            boxSize={4}
            bg={idx == currentSlide ? "white" : "gray.400"}
            rounded={"full"}
            onClick={() => setCurrentSlide(idx)}
          ></Box>
        ))}
      </HStack>
    </VStack>
  );
};
export default Review;
