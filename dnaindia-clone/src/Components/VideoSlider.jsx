import React from "react";
import { Box, Stack,VStack } from "@chakra-ui/react";
const data =[
    "Nupur Sharma row: Over 400 arrested in multiple states over Friday protests, situation tense in West Bengal, Jharkhand",
    "Delhi records 25 severe heatwave days this season so far, highest in 10 years",
    "Will India get the S-400 missile system on time? What Russian Ambassador said",
    "Protests erupt in JNU over razing of ex-student Afreen Fatima’s house after Prayagraj violence",
    "PAK vs WI: Dust storm during match forces players to wear masks as play gets halted,"
]
export const SliderNav = ({imgs}) => {
    const [index, setIndex] = React.useState(0);
    
    const tRef = React.useRef();
    React.useEffect(() => {
        start();
    
        return () => {
          stopTimer();
        };
      }, []);
      const stopTimer = () => {
        clearInterval(tRef.current);
      };
    
      const start = () => {
        tRef.current = setInterval(() => {
          setIndex(function (prev) {
            if (prev === data.length - 1) {
              return prev = 0;
            }
            return prev + 1;
          });
        }, 3000);
      };
  return (
    <Stack w="100%">
      <VStack w="90%" height="50px" border="1px solid black" margin="auto"  direction={['column', 'column' ,'row']} spacing="0px">
        <Box display="flex" justifyContent="center" backgroundColor="#aaa" color="#313131" fontSize="13px" position="relative" borderRadius="5px" w="20%" border="1px solid black" alignItems="center">Top News</Box>
        <Box textOverflow="hidden" w="60%" border="1px solid red" fontSize="15px" color="#fff" lineHeight="22px"  position="relative" backgroundColor="#313131">
            <Box>
                {data[index]}
            </Box>
        </Box>
        <Box backgroundColor="#313131" w="20%" border="1px solid red"></Box>
      </VStack>
    </Stack>
  );
};
