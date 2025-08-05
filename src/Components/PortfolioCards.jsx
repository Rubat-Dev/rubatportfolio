import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";
import { useAppContext } from '../Context/LightBoxContext';
const PortfolioCards = ({name,img,desc,webUrl,index,activeCat}) => { 
  const {openLightBox} = useAppContext();
  const cardCat = name.split(" ")[0];
  const condition = cardCat == activeCat || activeCat == "ALL";
  return (
    <>
      <Box flexGrow={1} overflow={'hidden'}  flexBasis={260} py={16}
      shadow={"xl"} borderRadius={10}
      className={condition? "pcard active" : "pcard"} 

       _hover={{
        "& .content":{
          bottom:10
        }
       }}>
         <Image src={img}  alt=""/>
         <VStack className='content' transition={'all .4s'} position={'absolute'} bottom={"-100%"} alignItems={'start'} left={5} w={'90%'} bg={'white'} color={'black'} opacity={'0.9'} px={5} py={2}
         >
            <Text fontSize={'20px'}>{name}</Text>
            <Flex>
            <Text fontSize={'16px'} color={'gray.500'}>{desc}</Text>
            <Flex pt={2} fontSize={'19px'} color={'gray.500'}>
              <HiMagnifyingGlassPlus cursor={'pointer'} onClick={()=>openLightBox(cardCat,index)}  />
             <a href={webUrl} target='_blank' >
              <GoPaperclip/>
             </a>
            </Flex>
            </Flex>
        </VStack>
      </Box>
    </>
  )}
  export default PortfolioCards






































 