import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import tacheparachute from './assets/images/tache-parachute.png';
import tacheparachute3 from './assets/images/tache-parachute3.png';
import tacheplane from './assets/images/tache-plane.png';
import CopyButton from './CopyButton';

const address = "DymfRJWge11CocC71heWARhvyd5XaYgJ6BsYpLoZRxzw";

const TokenomicsSection = React.forwardRef(({ selectedSection, sectionName }, ref) => (
    <Box
    ref={ref} id="tokenomics" h="800px" bg="transparent" position="relative" border="2px solid skyblue" borderRadius="10px" background={'transparent'}>
    <Flex height="100%">
      <Box
    left="0" top="0" height="100%" display="flex" justifyContent="flex-end" 
    position="relative" overflow="hidden"
    >
        <Image 
        borderRadius={"6px"}
        src={tacheparachute3} alt="About Image" 
        objectFit="cover" 
        width="100%" position="relative"
        overflow="hidden"
      height="100%"
        />
        </Box>

<Box position="absolute" top="0" left="0" width="100%" height="15%" display="flex" flexWrap="wrap" zIndex={'4'} overflow={"hidden"}>
          <Image
          key={`${selectedSection}-leftToRight-`}
          width="100%"
          height="100%"
          position={"relative"}
            src={tacheplane}
            alt="tachecoin image"
            objectFit="contain"
            objectPosition={"left"}
            overflow="hidden"
            sx={{
            animation: sectionName === 'tokenomics' ? `flyInLeftToRight 3s ease-out 0s forwards` : 'none',
            '@keyframes flyInLeftToRight': {
              '0%': { 
                opacity: 1, 
                transform: 'translateX(0)'
              },
              '100%': { 
                opacity: 1, 
                transform: 'translateX(100vw)'
              },
            },
          }} 
          />
    </Box> 

<Box position="absolute" top="15%" left="0" width="100%" height="100%" display="flex" flexWrap="wrap" zIndex={'3'} background={'transparent'}>
      {[...Array(10)].map((_, index) => (
          <Image
          key={`${selectedSection}-dropInSpin-${index}`}
          width="10%"
          height="100%"
          bg="transparent"
          position="relative"
          overflow="hidden"
            src={tacheparachute}
            alt="tache-parachute image"
            objectFit="contain"
            objectPosition={"top"}
sx={{
            animation: sectionName === 'tokenomics' ? `dropInSpin 5s ease-out ${(index * 0.125 + 0.125) + 1}s forwards` : 'none',
            '@keyframes dropInSpin': {
              '0%': { 
                opacity: 1, 
                transform: 'translateY(0) rotateY(0deg)'
              },
              '100%': { 
                opacity: 0, 
                transform: 'translateY(100vh) rotateY(180deg)'
              },
            },
          }} 
          />
      ))}
    </Box>

    <Flex direction="column" justifyContent="center" alignItems="center" width="50%" position="relative">

    <Text
      fontFamily={'customFont2'}
      color="skyblue"
      fontSize="8xl"
      textShadow="3px 3px 3px white"
      zIndex="1"
      mb={'100'}
    >
      Tokenomics
      </Text>
      <Text
      fontFamily={'Comic Sans MS'}
      color="skyblue"
      fontSize="32px"
      textAlign={'center'}
      textShadow="1px 1px 1px white"
      zIndex="1"
      mb={'100'}
    >
      1,000,000,000 SUPPLY
      </Text> 
      
<Text
      fontFamily={'Comic Sans MS'}
      color="skyblue"
      fontSize="28px"
      textAlign={'center'}
      textShadow="1px 1px 1px white"
      zIndex="1"
      mb={'100'}
    >
      {'NO TAXES'}
      </Text>
      
      <Text
      fontFamily={'Comic Sans MS'}
      color="skyblue"
      fontSize="28px"
      textAlign={'center'}
      textShadow="1px 1px 1px white"
      zIndex="1"
      mb={"4"}
    >
      {'CONTRACT ADDRESS:'}
      </Text> 
      
      <Text
      fontFamily={'Comic Sans MS'}
      color="skyblue"
      fontSize="24px"
      textAlign={'center'}
      textShadow="1px 1px 1px white"
      zIndex="1"
      mb={'10'}
    >
      {address}
      </Text>
      
        <CopyButton />
        </Flex>

</Flex>
    </Box>
));

TokenomicsSection.displayName = 'TokenomicsSection';

export default TokenomicsSection;