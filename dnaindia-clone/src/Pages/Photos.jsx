import React from 'react';
import {Box,Text,VStack,Image,HStack,Flex} from "@chakra-ui/react"
import { useDispatch,useSelector } from 'react-redux';
import {getPagedata} from "../redux/actions"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'


export const Photos=()=>{
    const {photo,loading} = useSelector((store)=>store.news)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getPagedata())
    },[dispatch])
    console.log("Photopage",photo)

    return(
        <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
            {
                loading? <Box>"loading"</Box> : 
           
            <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
                <Box w="100%" align="left" fontSize="12px" color="#36363c" mr="1px">
                <Breadcrumb spacing='8px' separator=">>">
                    <BreadcrumbItem>
                        <BreadcrumbLink  href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Photos</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                </Box>
                <Box w="100%"  borderBottom="1px solid #e2e2e2" align="left" marginTop="30px" marginBottom="20px" position="relative">
                    <Text fontWeight="bold" borderBottom="3px solid #ffde2f" display="inline" fontSize="24px" textTransform="uppercase" >
                        Photos
                    </Text>
                </Box>
                
                {
                    photo?.map((item,ind)=>{
                        return <VStack key={ind}  backgroundColor="#fff" width="100%" position="relative" marginBottom="15px">
                        <Box>
                            <Image src={item.urlToImage} />
                        </Box>
                        <Box padding="6px">
                            <Text as="h5" color="#4c4c4c" fontWeight="bold">
                                {item.title}
                            </Text>
                        </Box>
                    </VStack>
                    })
                }
            </VStack>
            }
        </VStack>
    )
}