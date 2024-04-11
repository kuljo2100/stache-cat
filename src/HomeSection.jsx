import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import tachehero from './assets/images/tache-hero.png';

const HomeSection = React.forwardRef(({ selectedSection, sectionName }, ref) => (
  <Box
    ref={ref}
    id="home"
    h="800px"
    bg="transparent"
    position="relative"
    border="2px solid silver"
    borderRadius="10px"
  >
<Flex height="100%">

    <Image 
      key={selectedSection}
      borderRadius="10px"
      src={tachehero}
      alt="Home Image"
      objectFit="cover"
      width="100%"
      height="100%"
      position="absolute"
      sx={{
        animation: sectionName === 'home' ? 'fadeIn 3s ease-in-out' : 'none',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    />

<Flex direction="column" justifyContent="center" alignItems="center" width="80%" left={'10%'} position="relative">
    <Text
      fontFamily={'customFont2'}
      color="white"
      fontSize="9xl"
      textShadow="3px 3px 3px #D4AF37"
      zIndex="1"
      mb={'100'}
    >
      {'$TACHE CAT'}
    </Text>
    
    <Text
      fontFamily={'Comic Sans MS'}
      fontWeight={'bold'}
      color="white"
      fontSize="3xl"
      textAlign={'center'}
      textShadow="2px 2px 2px #D4AF37"
      zIndex="1"
      mb={'20'}
    >
      {'10,000,000 $TACHE AIRDROP(1% TOTAL SUPPLY): 1st 1000 holders will be airdropped 10000 $TACHE Tokens each'}
    </Text>
    
    <Text
      fontFamily={'Comic Sans MS'}
      fontWeight={'bold'}
      color="white"
      fontSize="3xl"
      textShadow="2px 2px 2px #D4AF37"
      zIndex="1"
      textAlign={'center'}
      mb={'20'}
    >
      {'Welcome to the Age of Memes: The Era of the Mustache Cats'}
    </Text>

    <Text
      fontFamily={'Comic Sans MS'}
      fontWeight={'bold'}
      color="white"
      fontSize="3xl"
      textAlign={'center'}
      textShadow="2px 2px 2px #D4AF37"
      zIndex="1"
      mb={'20'}
    >
      {'Amidst a world captivated by memes, the Mustache Cats have emerged. Alongside our friends—the Penguins, Dogs, and Frogs—we declare: Here, we are all Cool Cats.'}
    </Text>
    
    </Flex>
    
    </Flex>
  </Box>
));

HomeSection.displayName = 'HomeSection';

export default HomeSection;