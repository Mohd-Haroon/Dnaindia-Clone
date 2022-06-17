import React from "react";
import { Box, Text, VStack, Image, HStack, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { gethomedata } from "../redux/actions";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export const Videos = () => {
  const { home, loading } = useSelector((store) => store.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(gethomedata());
  }, [dispatch]);

  return (
    <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
      {loading ? (
        <Box>"loading"</Box>
      ) : (
        <VStack backgroundColor="#f5f5f5" marginBottom="20px" width="100%">
          <Box w="100%" align="left" fontSize="12px" color="#36363c" mr="1px">
            <Breadcrumb spacing="8px" separator=">>">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Videos</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box
            w="100%"
            borderBottom="1px solid #e2e2e2"
            align="left"
            marginTop="30px"
            marginBottom="40px"
            position="relative"
          >
            <Text
              fontWeight="bold"
              borderBottom="3px solid #ffde2f"
              display="inline"
              fontSize="24px"
              textTransform="uppercase"
            >
              Videos
            </Text>
          </Box>
          <VStack width="100%" backgroundColor="black">
            {home?.map((item, ind) => {
              return (
                <VStack
                  key={ind}
                  backgroundColor="black"
                  width="100%"
                  position="relative"
                  marginBottom="15px"
                  borderBottom="1px solid white"
                >
                  <Box padding="6px" textAlign="left">
                    <Text as="h5" color="white" fontWeight="bold">
                      {item.title}
                    </Text>
                  </Box>
                  <Box>
                    <Image src={item.urlToImage} />
                  </Box>
                </VStack>
              );
            })}
          </VStack>
        </VStack>
      )}
    </VStack>
  );
};
