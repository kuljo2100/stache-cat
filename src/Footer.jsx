import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      position="sticky"
      bottom="0"
      zIndex="banner"
      bg="transparent"
      padding={0}
      color="white"
      textAlign="center"
      width="100%"
      >
        <Text 
        fontSize="l"
        fontFamily={'customFont2'}
        textColor={"#FFFFFF"}
        textShadow={"2px 2px 2px #000000"}
        >
        $TACHE CAT  |  © {new Date().getFullYear()}  |  All Rights Reserved  |  @kuljo2100
        </Text>
    </Box>
  );
}