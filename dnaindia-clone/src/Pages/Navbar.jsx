import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";

export const Navbar = () => {
  const [open,setClose] = React.useState(false)
  return (
    <Flex
      backgroundColor="#ffde2f"
      w="100%"
      h="65"
      position="sticky"
      top="0"
      alignItems="center"
      mb="20px"
      boxShadow="0 2px 8px 1px rgb(0 0 0 / 20%)"
      zIndex="10"
    >
      <Flex
      postion="relative"
        w="90%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack>
          <Box w="90px" h="40px">
            <Image src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" />
          </Box>
          <Box
            ml="40px"
            w="85px"
            h="30px"
            textAlign="center"
            borderRadius="50px"
            padding="5px"
            border="1px solid black"
          >
            <Text color="black" fontSize="12px" fontWeight="bold">
              हिंदी में पढ़ें
            </Text>
          </Box>
        </HStack>
        <Flex alignItems="center"  position="relative" width="100px" justifyContent="flex-end">
          <Flex backgroundColor="#fff" borderRadius="8px" position="absolute"  marginTop="80px" marginRight="20px" display={open?"flex":"none"}>
            <Input width="200px" placeholder="Search on DNA" _placeholder={{ opacity: 0.4, color: 'inherit' }} color="#2c2d31"/>
            <Button backgroundColor="#2c2d31" color="#fff">GO</Button>
          </Flex>
          <Box onClick={()=>setClose(!open)}>
            <Image src="https://english.cdn.zeenews.com/static/public/menusearch.svg" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
