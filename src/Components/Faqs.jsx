import {Heading, Text, VStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Accordian from './Accodian'

const Faqs = () => {
  return (
    <>
      <Flex direction={{base:"column",lg:"row"}} w={'90vw'} mx={'auto'} align={'start'} justify={'space-between'}>
        <VStack w={{base:"100%",lg:"35%",xl:'25%'}} align={{base:"center",lg:"start"}} >
            <Text fontWeight={'200'} fontSize={{base:28,lg:30}} >Frequently Asked <Heading fontWeight={'bold'}>Questions</Heading></Text>
            <Text textAlign={{base:"center",lg:"start"}} fontSize={{base:"13px",md:"16px"}} py={{base:5,lg:0}}>I’m here to answer some of the common questions clients have. From design approach to project timelines, I aim to provide clarity and make the process smooh.</Text>
        </VStack>
        <VStack w={{base:"100%",lg:"65%"}} >
        <Accordian/>
        </VStack>
      </Flex>
    </>
  )
}

export default Faqs
