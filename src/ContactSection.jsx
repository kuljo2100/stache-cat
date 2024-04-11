import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import tache4 from './assets/images/tache-4.png';

const ContactSection = React.forwardRef(({ selectedSection, sectionName }, ref) => (
<Box ref={ref} id="contact" h="800px" bg="transparent" position="relative" border="2px solid white" borderRadius="10px">
    <Flex height="100%">
      {/* Left side container for text and buttons */}
      <Flex direction="column" justifyContent="center" alignItems="center" width="50%" position="relative">
        <Text 
        
          fontFamily={"customFont2"}
          fontSize="8xl"
          color={"white"}
          textShadow="3px 3px 3px #D4AF37"
          mb="10"
        >
          BUY $TACHE
        </Text>

        <Button 
  backgroundColor={"transparent"} padding={"8px"} height={"33px"}
  borderRadius={"10px"}
  borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
  mb={'4'}
  _hover={{ backgroundColor: 'transparent' }}
  onClick={() => window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=DymfRJWge11CocC71heWARhvyd5XaYgJ6BsYpLoZRxzw&fixed=in', '_blank')}
>
  <Text 
    _hover={{ color:'#D4AF37'}}
    fontSize="xl" 
    fontWeight="bold"
    fontStyle={"italic"}
    fontFamily={'customFont4'}
    color={"#FFFFFF"}   
  >  
    BUY on RAYDIUM
  </Text>
</Button>
<Button 
  backgroundColor={"transparent"} padding={"8px"} height={"33px"}
  borderRadius={"10px"}
  borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
  mb={'4'}
  _hover={{ backgroundColor: 'transparent' }}
  onClick={() => window.open('https://jup.ag/swap/SOL-DymfRJWge11CocC71heWARhvyd5XaYgJ6BsYpLoZRxzw', '_blank')}
>
  <Text 
    _hover={{ color:'#D4AF37'}}
    fontSize="xl" 
    fontWeight="bold"
    fontStyle={"italic"}
    fontFamily={'customFont4'}
    color={"#FFFFFF"}   
  >  
    BUY on JUPITER
  </Text>
</Button>

<Text 
        
          fontFamily={"customFont2"}
          fontSize="8xl"
          color={"white"}
          textShadow="3px 3px 3px #D4AF37"
          mt="10"
        >
          Contact
        </Text>

        <Button 
  backgroundColor={"transparent"} padding={"8px"} height={"33px"}
  borderRadius={"10px"}
  borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
  mt={'10'}
  _hover={{ backgroundColor: 'transparent' }}
  onClick={() => window.open('https://twitter.com/kuljo2100', '_blank')}
>
  <Text 
    _hover={{ color:'#D4AF37'}}
    fontSize="xl" 
    fontWeight="bold"
    fontStyle={"italic"}
    fontFamily={'customFont4'}
    color={"#FFFFFF"}   
  >  
    TWITTER
  </Text>
</Button>        
      </Flex>

      <Box
    right="0" top="0" height="100%" display="flex" justifyContent="flex-end" 
    position="relative" overflow="hidden"
    >
      <Image
        key={selectedSection}
        borderRadius={"10px"}
        src={tache4}
        alt="Contact Image"
        position="relative"
          overflow="hidden"
        height="100%"
        sx={{
          animation: sectionName === 'contact' ? 'pulse 5s ease-in-out 1' : 'none',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.25)' },
          },
        }}
      />
    </Box>
    </Flex>

  </Box>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;