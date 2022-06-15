import React from "react";
import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box w="100%" backgroundColor="#1c1c1c">
      <VStack mt="25px">
        <HStack w="90%" borderBottom="1px solid #3b3a3a">
          <HStack mb="18px">
            <Flex flexWrap="wrap">
            <Box w="190px">
              <Image
                h="40px"
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
              />
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                INDIA
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                WORLD
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                BUSINESS
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                TECHNOLOGY
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                SPORTS
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                CRICKET
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                ENTERTAINMENT
              </Text>
            </Box>
            </Flex>
          </HStack>
        </HStack>
        <HStack w="90%" borderBottom="1px solid #3b3a3a">
          <HStack mb="18px">
          <Flex flexWrap="wrap">
            <Box w="190px">
              <Box h="25px" mb="5px">
                <Text color="#8E8E8E" fontSize="17px" fontWeight="bold">
                  FOLLOW US ON
                </Text>
              </Box>
              <Flex h="25px" gap="5px">
                <Box w="26px" h="24px">
                  <Image src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" />
                </Box>
                <Box w="26px" h="24px">
                  <Image src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" />
                </Box>
                <Box w="26px" h="24px">
                  <Image src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg" />
                </Box>
              </Flex>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                ABOUT DNA
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                CONTACT US
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                INVESTERS
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                ADVERTISE
              </Text>
            </Box>
            <Box padding="8PX 16PX">
              <Text color="#8E8E8E" fontSize="14PX">
                PRIVACY-POLICY
              </Text>
            </Box>
            </Flex>
          </HStack>
        </HStack>
        <HStack w="90%" borderBottom="1px solid #3b3a3a">
          <HStack mb="18px">
            <Flex flexWrap="wrap">
              <Box w="190px" h="50px">
                <Text
                  color="#8E8E8E"
                  fontSize="17PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  PARTNER SITE
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  ZEE NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  HINDI NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  MARATHI NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  BENGAL NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  TAMIL NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  MALAYALAM NEWS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  ZEE BUSINESS
                </Text>
              </Box>
              <Box padding="8PX 16PX">
                <Text
                  color="#8E8E8E"
                  fontSize="14PX"
                  fontWeight="semiBold"
                  fontFamily="Roboto Slab,sans-serif"
                >
                  WION
                </Text>
              </Box>
            </Flex>
          </HStack>
        </HStack>
        <Box textAlign="center">
          <Text
            color="#8E8E8E"
            fontSize="12PX"
            fontWeight="semiBold"
            fontFamily="Roboto Slab,sans-serif"
          >
            ©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
