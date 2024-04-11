import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import tachecart from './assets/images/tache-cart.png';
import tachecart2 from './assets/images/tache-cart2.png';
import tachekitty from './assets/images/tache-kitty.png';

const AboutSection = React.forwardRef(({ selectedSection, sectionName }, ref) => (
    
  <Box ref={ref} id="about" h="800px" bg="transparent" position="relative" border="2px solid gold" borderRadius="10px">
    <Flex height="100%">

    <Flex left={'2%'} direction="column" justifyContent="center" alignItems="center" width="40%" position="relative">
        <Text 
        fontFamily={"customFont2"}
    color={"#D4AF37"}
      fontSize="8xl"
      textShadow="3px 3px 3px #FFFFFF"
    zIndex="1"
    mb={'20px'}
  >
        About
        </Text>

        <Text
      fontFamily={'Comic Sans MS'}
      color="#D4AF37"
      fontSize="23px"
      textAlign={'center'}
      textShadow="1px 1px 1px white"
      zIndex="1"
      mb={'20px'}
    >
      {"Welcome to the Purr-fect Meme Revolution: $TACHE, The Mustache Cat Token. In the vast and vibrant world of digital currencies, where creativity meets community, $TACHE stands out with its whiskers held high. This is not just any token; this is the badge of honor for the COOL CATS, the innovators, and the meme aficionados who dare to dream and create. $TACHE, the Mustache Cat Token, is more than a currency—it's a movement. Born in the alleyways of Solana, $TACHE leaps onto the scene with a vision to unite the most ingenious minds across the meme-verse. Whether you're drawing whiskers, crafting puns, or spinning tales with cats, dogs, frogs, and everything in between, $TACHE is your canvas. With a total supply of 1 billion tokens and absolutely zero taxes, we're here to ensure that creativity flows as freely as a cat's leap of faith."}
    </Text>
</Flex>

    <Box
    position="absolute" right="0" top="0" bottom="0" height="100%" display="flex" justifyContent="flex-end" overflow="hidden"
    >
        <Image
        key={selectedSection} borderRadius={"10px"}
        src={tachecart2} alt="About Image" 
        objectFit="contain" 
        width="100%" position="relative"
        overflow="hidden"
      height="100%"
        sx={{
          animation: sectionName === 'about' ? 'pulse 5s ease-in-out 1' : 'none',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.25)' },
          },
        }}
        />
        </Box>
    
    <Box position="absolute" top="0" left="0" width="100%" height="100%" display="flex" flexWrap="wrap" zIndex={'2'} overflow={"hidden"}>
      {[...Array(4)].map((_, index) => (
          <Image
          key={`${selectedSection}-leftToRight-${index}`}
          width="100%"
          height="20%"
          position={"relative"}
            src={tachecart}
            alt="tachecoin image"
            objectFit="contain"
            objectPosition={"left"}
            overflow="hidden"
            sx={{
            animation: sectionName === 'about' ? `slideInLeftToRight 4s ease-out ${index * 0.25 + 0.25}s forwards` : 'none',
            '@keyframes slideInLeftToRight': {
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
      ))}
    </Box> 

    <Box position="absolute" top="0" right="0" width="100%" height="100%" display="flex" flexWrap="wrap" zIndex={'2'} overflow={"hidden"}>
      {[...Array(4)].map((_, index) => (
          <Image
          key={`${selectedSection}-rightToLeft-${index}`}
          width="100%"
          height="20%"
          position="relative"
            src={tachekitty}
            alt="tachecoin image"
            objectFit="contain"
            objectPosition={"right"}
            overflow="hidden"
            sx={{
            animation: sectionName === 'about' ? `slideInRightToLeft 4s ease-out ${index * 0.25 + 0.25}s forwards` : 'none',
            '@keyframes slideInRightToLeft': {
              '0%': { 
                opacity: 1, 
                transform: 'translateX(0)'
              },
              '100%': { 
                opacity: 1, 
                transform: 'translateX(-100vw)'
              },
            },
          }} 
          />
      ))}
    </Box>

</Flex>
      </Box>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;