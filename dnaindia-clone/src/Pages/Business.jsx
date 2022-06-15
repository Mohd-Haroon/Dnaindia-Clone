import React from 'react';
import {Box,Text,VStack,Image,HStack,Flex} from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { useDispatch,useSelector } from 'react-redux';


export const Business=()=>{
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
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Box>
        </VStack>
    )
}