import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import tache5 from './assets/images/tache-bg.png';
import tachecoin from './assets/images/tache-coin.png';

const RoadmapSection = React.forwardRef(({ selectedSection, sectionName }, ref) => (
    <Box ref={ref} id="roadmap" h="800px" bg="transparent" position="relative" border="2px solid gold" borderRadius="10px" overflow="hidden">
<Flex height="100%">

    <Image
      borderRadius="10px"
      src={tache5}
      alt="Roadmap Image"
      objectFit="cover"
      width="100%"
      height="100%"
      position="absolute"
    />

    {/* Overlay pieces */}
    <Box key={selectedSection} position="absolute" top="0" left="0" width="100%" height="100%" display="flex" flexWrap="wrap" zIndex={'3'}>
      {[...Array(25)].map((_, index) => (
        <Box
          key={index}
          width="20%"
          height="20%"
          bg="transparent"
          position="relative"
          overflow="hidden"
          sx={{
            animation: sectionName === 'roadmap' ? `fallAwaySpin 4s ease-out ${index * 0.125 + 0.125}s forwards` : 'none',
            '@keyframes fallAwaySpin': {
              '0%': { 
                opacity: 1, 
                transform: 'translateY(0) rotateX(0deg)'
              },
              '100%': { 
                opacity: 0, 
                transform: 'translateY(100vh) rotateX(2880deg)'
              },
            },
          }}        
        >
          <Image
            src={tachecoin}
            alt="tachecoin image"
            objectFit="contain"
            width="100%"
            height="100%"
            position="absolute"
          />
        </Box>
      ))}
    </Box>

    <Flex direction="column" justifyContent="center" alignItems="center" width="100%" position="relative">
    <Text
      fontFamily={'customFont2'}
      color="white"
      fontSize="9xl"
      textShadow="3px 3px 3px purple"
      zIndex="1"
      mb={'10'}
    >
      Roadmap
    </Text>

  <Box h="50%" w="50%" bg="transparent" position="relative" border="5px solid #800080" borderRadius="20px">
    
    <Box h="100%" w="100%" position="absolute" borderRadius="8px" background="#D4AF37" opacity=".25" />

    <Flex direction="column" justifyContent="center" alignItems="center" position="absolute" top="0" right="0" bottom="0" left="0">
      <Text fontFamily="Comic Sans MS" color="#FFFFFF" fontSize="30px" textAlign="center" textShadow="2px 2px 2px #000000" fontWeight={'bold'} zIndex="1" mb={'5'}>
        PHASE 1: LIVE THE MEME
      </Text>
      
      <Text fontFamily="Comic Sans MS" color="#FFFFFF" fontSize="30px" fontWeight={'bold'} textAlign="center" textShadow="2px 2px 2px #000000" zIndex="1" mb={'5'}>
        PHASE 2: AIRDROP 1% OF TOTAL SUPPY 10,000,000 TOKENS TO THE 1ST 1000 HOLDERS
      </Text>

      <Text fontFamily="Comic Sans MS" color="#FFFFFF" fontSize="30px" fontWeight={'bold'} textAlign="center" textShadow="2px 2px 2px #000000" zIndex="1"mb={'5'}>
        PHASE 3: FIND OUT WHAT MUSTACHE RIDE MEANS
      </Text>

      <Text fontFamily="Comic Sans MS" color="#FFFFFF" fontSize="30px" fontWeight={'bold'} textAlign="center" textShadow="2px 2px 2px #000000" zIndex="1">
        PHASE 4: HODL
      </Text>

    </Flex>
  </Box>

    </Flex>

</Flex>
  </Box>
));

RoadmapSection.displayName = 'RoadmapSection';

export default RoadmapSection;