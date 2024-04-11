import { Box } from '@chakra-ui/react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './LoadingScreen';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const contactRef = useRef(null);

const [selectedSection, setSelectedSection] = useState('');
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch data here
    setTimeout(() => setIsLoading(false), 5000); // Simulate a loading time
  }, []);

  const offsetHeight = 68;

  const scrollToRef = (ref) => {
    const position = ref.current.offsetTop - offsetHeight; // Adjusting for header
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  // Updated handleSelectSection to include scrolling
  const handleSelectSection = (section) => {
    
    setSelectedSection(`${section}_${Date.now()}`);
    
    // Ensure we also scroll to the correct section
    switch(section) {
      case 'home':
        scrollToRef(homeRef);
        break;
      case 'about':
        scrollToRef(aboutRef);
        break;
      case 'tokenomics':
        scrollToRef(tokenomicsRef);
        break;
      case 'roadmap':
        scrollToRef(roadmapRef);
        break;
      case 'contact':
        scrollToRef(contactRef);
        break;
      default:
        console.log("No such section");
    }
  };

  return (
    <>
    {isLoading ? <LoadingScreen /> : 
    <>
        <Box bg={'black'} maxHeight={'100%'} width={'100%'} px={[0]}>
        <Header
          onSelectSection={handleSelectSection}
        />
        <MainContent refs={{ homeRef, aboutRef, tokenomicsRef, roadmapRef, contactRef }} selectedSection={selectedSection} />
        <Footer />

      </Box>
      </>
      }
      </>
  );
}

export default App;
