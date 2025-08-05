import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Accordian = () => {
  const faqs = [
    {
      title: " What tools do you use for web design?",
      desc: " I work primarily with tools for design, and I integrate HTML, CSS, and JavaScript frameworks to bring designs to life.",
    },
    {
      title: "How long does a typical project take? ",
      desc: "Timelines vary depending on project complexity, but most websites take around 2-4 weeks from concept to launch.",
    },
    {
      title: "Do you handle responsive and mobile-friendly designs?",
      desc: "Yes, every design I create is optimized for desktop, tablet, and mobile to ensure a seamless user experience across all devices.",
    },
    {
      title: "Can you update my existing website? Absolutely! ",
      desc: " I offer redesigns and can work with your current content to enhance your website’s look and functionality.",
    },
    {
      title: "What’s your process for starting a new web design project?",
      desc: "I start with an in-depth consultation to understand your vision, target audience, and goals. Then, I create wireframes and prototypes for your feedback before moving on to the full design and development. This ensures that the final result aligns perfectly with your expectations.",
    },
  ];
 const [active, setActive] = useState(0);
 
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple={false} w={"full"}>
      {
        faqs.map((faq, index) => (
        <AccordionItem  p={3} key={index} shadow={'lg'} mb={5}>
          <AccordionButton _hover={{background:"transparent"}} onClick={()=>setActive(index)}>
            <HStack flex="1">
              <Text color={"blue"}>{index + 1}.</Text>
              <Text  color={active == index ? "blue" : ""} fontSize={{base:"13px",md:"16px"}} >{faq.title}?</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel fontSize={{base:"13px",md:"16px"}}>{faq.desc}</AccordionPanel>
        </AccordionItem>
        ))
      }
      </Accordion>
    </>
  );
};
export default Accordian;
