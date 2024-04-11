import { forwardRef } from 'react';
import { VStack, Box, Image, Text } from '@chakra-ui/react';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import TokenomicsSection from './TokenomicsSection';
import RoadmapSection from './RoadmapSection';
import ContactSection from './ContactSection';

const MainContent = forwardRef(({ refs, selectedSection }, ref) => {

  const sectionName = selectedSection.split('_')[0];

  return (
    <VStack spacing={0} align="stretch" backgroundColor={"black"}>

<HomeSection selectedSection={selectedSection} sectionName={sectionName} ref={refs.homeRef} />

<AboutSection selectedSection={selectedSection} sectionName={sectionName} ref={refs.aboutRef} />

<TokenomicsSection selectedSection={selectedSection} sectionName={sectionName} ref={refs.tokenomicsRef} />

<RoadmapSection selectedSection={selectedSection} sectionName={sectionName} ref={refs.roadmapRef} />

<ContactSection selectedSection={selectedSection} sectionName={sectionName} ref={refs.contactRef} />

    </VStack>
  );
});

MainContent.displayName = 'MainContent';

export default MainContent;