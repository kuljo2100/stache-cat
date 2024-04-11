import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const address = "DymfRJWge11CocC71heWARhvyd5XaYgJ6BsYpLoZRxzw";

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setIsCopied(true);

        // Optional: Reset the button's text after a delay
        setTimeout(() => setIsCopied(false), 10000); // Resets the button text to "COPY" after 10 seconds
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
    <Button onClick={handleCopy}
    backgroundColor={"transparent"} 
    padding={"10px"} 
    height={"33px"}
      borderRadius={"10px"}
       borderWidth="2px" 
       borderColor="white" borderStyle="solid" 
       _hover={{ backgroundColor: 'transparent', borderColor:'skyblue' }}
       zIndex={'3'}
       >
      <Text 
        _hover={{ color:'white' }}
        fontSize="xl" 
        fontWeight="bold"
        fontStyle={"italic"}
        fontFamily={'cutomFont1'}
        color={"skyblue"}
        textShadow={'1px 1px 1px white'}
        margin={'5px'}
        >
            {isCopied ? "COPIED" : "COPY"}
      </Text>
        </Button>
    </>
  );
};

export default CopyButton;