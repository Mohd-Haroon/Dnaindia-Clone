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
    const {home} = useSelector((store)=>store.news)
    const dispatch = useDispatch()
    const [data,setData] = React.useState(home.slice(0, 8)) // videoslider
    const [data2,setData2] = React.useState(home.slice(7, 15)) //uppperfeed
    const [dataaa,setDataaa] = React.useState(home.slice(14, 24)) //photoslider
    const [dataaa4,setDataaa4] = React.useState(home.slice(24, home.length-1)) //bottom slider
    const [single,setSingle] = React.useState(home[5]) // topsingle 

    React.useEffect(()=>{
     dispatch(gethomedata())
    },[])

    // console.log("home1",home)
    // console.log("home1data",data)
    // console.log("home1single",single)
    return(
        <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
            {/* <Box w="100%" align="left" fontSize="12px" color="#36363c" mr="1px">
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
            </Box> */}
            <VStack backgroundColor="#fff" width="100%" position="relative" marginBottom="15px">
                <Box>
                    <Image src={single?.urlToImage} />
                </Box>
                <Box padding="6px">
                    <Text as="h5" color="#4c4c4c" fontWeight="bold">
                    {single?.title}
                    </Text>
                </Box>
            </VStack>
            {
               data2?.map((item,ind)=>{
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
            
            <FeedVideoSlider data={data2}/> 
            {
               dataaa4?.map((item,ind)=>{
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
    )

}