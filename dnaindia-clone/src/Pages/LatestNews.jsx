import React from "react";
import { Box, Text, VStack, Image, HStack, Flex, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Routelink } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { getlATESTdata } from "../redux/actions";

export const LatestNews = () => {
  const { latest, loading } = useSelector((store) => store.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getlATESTdata());
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
                <BreadcrumbLink href="#">Latest News</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          {latest?.map((item, ind) => {
            return (
              <Link to={`/latest/${item.title}`} as={Routelink} key={ind}>
                <Flex
                  backgroundColor="#fff"
                  padding="10px"
                  borderRadius="5px"
                  marginBottom="10px"
                  key={ind}
                >
                  <Box maxWidth="25%" marginRight="10px">
                    <Image src={item.urlToImage} />
                  </Box>
                  <Box>
                    <Text>{item.title}</Text>
                  </Box>
                </Flex>
              </Link>
            );
          })}
        </VStack>
      )}
    </VStack>
  );
};
