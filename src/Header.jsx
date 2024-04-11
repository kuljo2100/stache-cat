import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import tachecoin from './assets/images/tache-coin.png';

export default function Header({ onSelectSection }) {

  return (
    <>
    <Flex as="header" position="sticky" top="0" zIndex="banner"
    p={1}
     justifyContent="space-between" alignItems="center" 
    >
    <HStack spacing={2} marginLeft={"5%"} alignItems="center" zIndex={'1'}>
      <Image 
      src={tachecoin} 
      boxSize="60px"
      sx={{
        transition: 'transform 4s ease-in-out',
        ':hover': {
          transform: 'rotateY(1440deg)',
        },
      }}
      />
        <Text 
        fontSize="5xl"
        marginRight="2"
        fontFamily={'customFont2'}
        textColor={"#FFFFFF"}
        textShadow={"2px 2px 2px #D4AF37"}
        >
          $TACHE CAT
        </Text>
        
       </HStack>

      <Button backgroundColor={"transparent"} padding={"8px"} height={"33px"}
      onClick={() => onSelectSection('home')}
      borderRadius={"10px"}
       borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent' }}
       >
      <Text 
        _hover={{ color:'#D4AF37'}}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'customFont4'}
        color={"#FFFFFF"}
        >
        Home
</Text>
        </Button>
      <Button 
      backgroundColor={"transparent"} padding={"8px"} height={"33px"}
      onClick={() => onSelectSection('about')}
      borderRadius={"10px"}
       borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent' }}
      >
<Text 
_hover={{ color:'#D4AF37'}}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'customFont4'}
color={"#FFFFFF"}
        >
        About
</Text>
      </Button>
      <Button 
      backgroundColor={"transparent"} padding={"8px"} height={"33px"}
      onClick={() => onSelectSection('tokenomics')}
      borderRadius={"10px"}
       borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent' }}
      >
      <Text 
      _hover={{ color:'#D4AF37'}}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'customFont4'}
color={"#FFFFFF"}
        > 
        Tokenomics
</Text> 
      </Button>
      <Button
      backgroundColor={"transparent"} padding={"8px"} height={"33px"}
      onClick={() => onSelectSection('roadmap')}
      borderRadius={"10px"}
       borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent' }}
      >
        <Text
        _hover={{ color:'#D4AF37'}}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'customFont4'}
color={"#FFFFFF"}
        > 
        Roadmap
      </Text>
      </Button>
      <Button 
      backgroundColor={"transparent"} padding={"8px"} height={"33px"}
      onClick={() => onSelectSection('contact')}
      borderRadius={"10px"}
       borderWidth="2px" borderColor="#D4AF37" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent' }} 
      marginRight={"5%"}
      >
       <Text 
       _hover={{ color:'#D4AF37'}}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'customFont4'}
     color={"#FFFFFF"}   
        >  
        BUY
      </Text>
      </Button>

    </Flex>
    </>
  );
}