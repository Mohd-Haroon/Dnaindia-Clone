import React from 'react';
import {Box,Text,VStack,Image,HStack,Flex} from "@chakra-ui/react"
import {FeedVideoSlider} from "../Components/FeedVideoSlider"
import {getLifestyledata} from "../redux/actions"
import { useDispatch,useSelector } from 'react-redux';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'


export const LifeStyles=()=>{
    const {life,loading} = useSelector((store)=>store.news)
    const dispatch = useDispatch()
    

    React.useEffect(()=>{
     dispatch(getLifestyledata())
    },[dispatch])

    // console.log("home1sportsenter",enter)

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
                        <BreadcrumbLink href='#'>Viral</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                </Box>
                <Box w="100%"  borderBottom="1px solid #e2e2e2" align="left" marginTop="30px" marginBottom="20px" position="relative">
                    <Text fontWeight="bold" borderBottom="3px solid #ffde2f" display="inline" fontSize="24px" textTransform="uppercase" >
                        Viral
                    </Text>
                </Box>
                <VStack backgroundColor="#fff" width="100%" position="relative" marginBottom="15px">
                    <Box>
                        <Image src={life[0]?.urlToImage} />
                    </Box>
                    <Box padding="6px">
                        <Text as="h5" color="#4c4c4c" fontWeight="bold">
                        {life[0]?.title}
                        </Text>
                    </Box>
                </VStack>
                {
                life?.slice(7, 15)?.map((item,ind)=>{
                    return <Flex backgroundColor="#fff" padding="10px" borderRadius="5px" marginBottom="10px" key={ind}>
                    <Box maxWidth="25%" marginRight="10px">
                        
                        <Image src={item.urlToImage} />
                    </Box>
                    <Box>
                        <Text>
                        {item.title}
                        </Text>
                    </Box>
                </Flex>
                }) 
                }
                
                <FeedVideoSlider data={life?.slice(0, 8)}/> 
                {
                life?.slice(24, life.length-1)?.map((item,ind)=>{
                    return <Flex backgroundColor="#fff" padding="10px" borderRadius="5px" marginBottom="10px" key={ind}>
                    <Box maxWidth="25%" marginRight="10px">
                        
                        <Image src={item.urlToImage} />
                    </Box>
                    <Box>
                        <Text>
                        {item.title}
                        </Text>
                    </Box>
                </Flex>
                }) 
                }
            </VStack>
         }
         </VStack>
    )

}