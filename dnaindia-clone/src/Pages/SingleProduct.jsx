import React from "react";
import { Box, Text, VStack, Image, HStack, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPagedata } from "../redux/actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export const SingleProduct = () => {
  const { latest, loading } = useSelector((store) => store.news);
  const param = useParams();
  const { id } = param;

  let data = latest.filter((item) => item.title === id);

  return (
    <VStack w="100%" padding="5px" backgroundColor="#f5f5f5">
      {data?.map((item, ind) => {
        return (
          <VStack w="100%" key={ind}>
            <Text as={"h1"} fontSize="24px" fontWeight="bold" color="#36363c">
              {item.title}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="400"
              color="#36363c"
              lineHeight="20px"
            >
              {item.content}
            </Text>
            <Box w="100%" textAlign="left">
              <Text fontSize="16px" fontWeight="400" color="#4c4c4c">
                Source : {item.source.name}
              </Text>
            </Box>
            <Box>
              <Image src={item.urlToImage} />
            </Box>
            <Text
              fontSize="20px"
              fontWeight="400"
              color="#4c4c4c"
              lineHeight="30px"
            >
              {item.description}
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
};
