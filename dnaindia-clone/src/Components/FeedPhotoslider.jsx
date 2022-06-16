import React from 'react';
import {Box,VStack,Text,Image} from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css'

export const FeedVideoSlider =({data})=>{
    console.log(data)
    const settings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        gap:"10px"
      };
    return(
        <VStack w="100%" marginBottom="30px">
            <Box w="100%"  borderBottom="1px solid #e2e2e2" align="left" marginTop="30px" marginBottom="20px" position="relative">
                <Text fontWeight="bold" borderBottom="2px solid #ffde2f" display="inline" fontSize="20px" textTransform="uppercase" paddingBottom="4px">
                    Videos
                </Text>
            </Box>
            <Box w="100%"  >
                <Slider {...settings}>
                    {
                        data?.map((item,ind)=>{
                            return <VStack key={ind} w="200px" backgroundColor="2px solid #fde255" padding="6px" borderBottom='2px solid #ffde2f'>
                            <Box>
                                <Image src={item?.urlToImage} />
                            </Box>
                            <Box>
                                <Text>
                                {item?.title}
                                </Text>
                            </Box>
                        </VStack>  
                        })
                    }
                                     
                </Slider>
            </Box>
            <Box h="34px" alignItems="centre" marginTop="50px" width="100%" backgroundColor="#fff" textAlign="center" padding="5px" margin="10px 0px" fontWeight="500" fontFamily="Roboto Slab, sans-serif">
                <Text>
                    MORE PHOTOS
                </Text>
            </Box>

        </VStack>
    )
}