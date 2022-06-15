import React from "react";
import { Box, Text, Flex, Image,HStack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex backgroundColor="#ffde2f" w="100%" h="65" position="sticky" top="0" alignItems="center" boxShadow="0 2px 8px 1px rgb(0 0 0 / 20%)" zIndex="10">
      <Flex w="90%" border="1px solid black" margin="auto" justifyContent="space-between" alignItems="center">
        <HStack border="1px solid black">
          <Box w="90px" h="40px">
            <Image src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" />
          </Box>
          <Box ml="40px" border="1px solid black" w="85px" h="30px" textAlign="center" borderRadius="50px" padding="5px">
            <Text color="black" fontSize="12px" fontWeight="bold" >हिंदी में पढ़ें</Text>
          </Box>
        </HStack>
        <Box alignItems="center">
            <Image src="https://english.cdn.zeenews.com/static/public/menusearch.svg"/>
        </Box>
      </Flex>
    </Flex>
  );
};
