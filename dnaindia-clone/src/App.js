import React from "react";
import { Box, Text, VStack, Flex, Link, Image } from "@chakra-ui/react";
import { Link as Routelink } from "react-router-dom";
import { Navbar } from "./Pages/Navbar";
import { Footer } from "./Pages/Footer";
import { AllRoutes } from "./Pages/AllRoutes";
import {SliderNav} from "./Pages/SliderNav";

function App() {
  return (
    <VStack backgroundColor="#f5f5f5" textColor="black">
      <Navbar />
      <SliderNav/>
      <Flex w="100%" overflow="hidden" overflowX="auto" postion="relative" display={{base:'flex', md:'flex', lg:'none'}} __css={{'&::-webkit-scrollbar': {
          w: '2',
        }}}>
              <Link as={Routelink} to="/latestnews"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                boxSizing="borderBox"
                alignItems="center"
                gap="10px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                  w="140px"
                  
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" />
                  <Box>

                  <Text textDecoration="none">Latest News</Text>
                  </Box>
                </Flex>
              </Link>
              <Link as={Routelink} to="/photos"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                  w="100px"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg" />
                  <Text textDecoration="none">Photos</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/videos"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="90px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
              
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg" />
                  <Text textDecoration="none">Videos</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/explainer"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="120px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg" />
                  <Text textDecoration="none">Explainers</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/india"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="80px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" />
                  <Text textDecoration="none">India</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/entertainment"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="140px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" />
                  <Text textDecoration="none">Entertainment</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/sports"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="90px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" />
                  <Text textDecoration="none">Sports</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/viralnews"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="120px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" />
                  <Text textDecoration="none">Viral News</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/lifestyles"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="110px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" />
                  <Text textDecoration="none">Lifestyles</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/business"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="110px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" />
                  <Text textDecoration="none">Business</Text>
                </Flex>
              </Link>
              <Link as={Routelink} to="/world"  _hover={{
                textDecoration:"none"
              }}>
                <Flex
                
                alignItems="center"
                gap="10px"
                  w="90px"
                  h="35px"
                  _hover={{
                    backgroundColor: "#ffde2f"
                  }}
                  textDecoration="none"
                  // border="1px solid red"
                >
                  <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" />
                  <Text textDecoration="none">World</Text>
                </Flex>
              </Link>
      </Flex>
      {/* //flexend */}
      <Flex w="90%" direction={{base:'column',md:'column',lg:"row"}}>
        <VStack spacing='0px'  w="25%" align="left" backgroundColor="#f5f5f5" display={{base:'none', md:'none',lg:'block'}}>
          <Link as={Routelink} to="/latestnews" _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f",
                textDecoration:"none"
              }}
              w="100%"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" />
              <Text>Latest News</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/photos"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
              w="100%"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg" />
              <Text textDecoration="none">Photos</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/videos"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg" />
              <Text textDecoration="none">Videos</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/explainer"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg" />
              <Text textDecoration="none">Explainers</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/india"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" />
              <Text textDecoration="none">India</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/entertainment"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" />
              <Text textDecoration="none">Entertainment</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/sports"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" />
              <Text textDecoration="none">Sports</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/viralnews"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" />
              <Text textDecoration="none">Viral News</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/lifestyles"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" />
              <Text textDecoration="none">Lifestyles</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/business"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" />
              <Text textDecoration="none">Business</Text>
            </Flex>
          </Link>
          <Link as={Routelink} to="/world"  _hover={{
                textDecoration:"none"
              }}>
            <Flex
            
            alignItems="center"
            gap="10px"
              w="100%"
              h="35px"
              _hover={{
                backgroundColor: "#ffde2f"
              }}
              textDecoration="none"
              // border="1px solid red"
            >
              <Image src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" />
              <Text textDecoration="none">World</Text>
            </Flex>
          </Link>
        </VStack>
        <VStack w={{base:'100%',md:'100%',lg:'50%'}}  backgroundColor="white">
          <AllRoutes />
        </VStack>
        <Box w={{base:'100%',md:'100%',lg:'25%'}} h="20px" ></Box>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default App;
