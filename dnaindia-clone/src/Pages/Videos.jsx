import React from 'react';
import {Box,Text,VStack,Image,HStack,Flex} from "@chakra-ui/react"
import { useDispatch,useSelector } from 'react-redux';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

export const Videos =()=>{
    const {home} = useSelector((store)=>store.news)
    const dispatch = useDispatch()

    return(
        <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
            <Box w="100%" align="left" fontSize="12px" color="#36363c" mr="1px">
            <Breadcrumb spacing='8px' separator=">>">
                <BreadcrumbItem>
                    <BreadcrumbLink  href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Videos</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Box>
            <Box w="100%"  borderBottom="1px solid #e2e2e2" align="left" marginTop="30px" marginBottom="20px" position="relative">
                <Text fontWeight="bold" borderBottom="3px solid #ffde2f" display="inline" fontSize="20px" textTransform="uppercase" >
                    Videos
                </Text>
            </Box>
        </VStack>
    )
}