import React from "react";
import { Box, HStack,Flex ,Text} from "@chakra-ui/react";
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
    <HStack w="100%" h="50px">
      <HStack backgroundColor="#313131" w="90%" height="50px" border="1px solid black" margin="auto"  direction={['column', 'column' ,'column']} spacing="0px">
        <Box display="flex" justifyContent="center" backgroundColor="#aaa" color="#313131" fontSize="13px" position="relative" borderRadius="5px" w="10%" alignItems="center" h="50px">Top News</Box>
        <Flex overflow="hidden"   w="70%" fontSize="15px" color="#fff" lineHeight="22px"  position="relative" backgroundColor="#313131">
            <Box overflow="hidden"   w="100%" h="100%">
              <Text overflow="ellpsis">
                {data[index]}
              </Text>
            </Box>
        </Flex>
        <Box backgroundColor="#313131" w="20%"></Box>
      </HStack>
    </HStack>
  );
};
