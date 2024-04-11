import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import customCursor from './assets/images/tache-pointer.png';
import { keyframes } from '@chakra-ui/react';

// Combined spin and scale animation
const spinAndScale = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(360deg) scale(2); }
  50% { transform: rotate(720deg) scale(1); }
  75% { transform: rotate(1080deg) scale(0.5); }
  100% { transform: rotate(1440deg) scale(1); }
`;

const LoadingScreen = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="gray.200"
    >
      <Image
        src={customCursor}
        alt="Loading..."
        boxSize="100px"
        animation={`${spinAndScale} infinite 4s linear`} // Applying the combined animation
      />
      <Text fontFamily={'customFont2'} fontSize="8xl" mt="40">
        Loading....
      </Text>
    </Box>
  );
};

export default LoadingScreen;
