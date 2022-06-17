import React from 'react';
import {Box,Text,VStack,Image,HStack,Flex} from "@chakra-ui/react"
import {FeedVideoSlider} from "../Components/FeedVideoSlider"
import {gethomedata} from "../redux/actions"
import { useDispatch,useSelector } from 'react-redux';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

export const Home=()=>{
    const {home,loading,success} = useSelector((store)=>store.news)
    const dispatch = useDispatch()
    

    React.useEffect(()=>{
     dispatch(gethomedata())
    },[dispatch])

    
    
    return(
        <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
            {
                loading? <Box>"loading"</Box> : 
           
                <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
                    <VStack backgroundColor="#fff" width="100%" position="relative" marginBottom="15px">
                        <Box>
                            <Image src={home[0]?.urlToImage} />
                        </Box>
                        <Box padding="6px">
                            <Text as="h5" color="#4c4c4c" fontWeight="bold">
                            {home[0]?.title}
                            </Text>
                        </Box>
                    </VStack>
                    {
                    home?.slice(7, 15)?.map((item,ind)=>{
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
                    
                    <FeedVideoSlider data={home?.slice(0, 8)}/> 
                    {
                    home?.slice(24, home.length-1)?.map((item,ind)=>{
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