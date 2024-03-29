import { Box, Container, Text, useBreakpointValue } from '@metafam/ds';
import BackgroundImageDesktop from 'assets/landing/sections/section-4.jpg';
import BackgroundImageMobile from 'assets/landing/sections/section-4.sm.jpg';
import { FullPageContainer } from 'components/Container';
import { useMotionDetector } from 'lib/hooks/useMotionDetector';
import { useOnScreen } from 'lib/hooks/useOnScreen';
import React, { useRef } from 'react';

import { LandingNextButton } from './LandingNextButton';
import { LandingPageSectionProps } from './landingSection';

export const WhyAreWeHere: React.FC<LandingPageSectionProps> = ({
  section,
  nextSection,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const root = typeof window !== 'undefined' ? document.body : null;
  const noMotion = useMotionDetector(root);
  const displayElement = noMotion ? true : !!onScreen;
  const responsiveBg = useBreakpointValue({
    base: BackgroundImageMobile,
    md: BackgroundImageDesktop,
  });

  return (
    <FullPageContainer
      bgImageUrl={responsiveBg?.src}
      backgroundBlendMode="normal"
      backgroundPosition="center"
      id={section.internalLinkId}
      position="relative"
    >
      <Container
        display="flex"
        maxW={{
          base: '100%',
          md: 'xl',
          lg: '7xl',
          '2xl': 'full',
          '4xl': '90%',
        }}
        px={{ base: 'inherit', lg: 14 }}
        height="100%"
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <Box
          {...{ ref }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={{ base: '90%', md: 'sm', '2xl': 'xl' }}
          fontSize={{ base: 'lg', '2xl': '2xl' }}
          lineHeight={{ base: 'lg', '2xl': '2xl' }}
          fontWeight="normal"
          pl={0}
          zIndex={100}
          transform={`translate3d(0, ${displayElement ? '0' : '50px'}, 0)`}
          opacity={displayElement ? 1 : 0}
          transition={
            noMotion
              ? 'none'
              : 'transform 0.3s 0.1s ease-in-out, opacity 0.5s 0.2s ease-in'
          }
        >
          <Text
            as="h2"
            pb={{ base: '1.188rem', '2xl': '3xl' }}
            fontSize={{ base: '3xl', '2xl': '5xl' }}
            fontWeight="bold"
            className="gradient-text"
          >
            Why are we here?
          </Text>
          <Text
            pb={{ base: '1.188rem', '2xl': '3xl' }}
            fontSize={{ base: 'xl', '2xl': '3xl' }}
          >
            To help{' '}
            <Text as="strong" className="gradient-text">
              you
            </Text>{' '}
            tame it.
          </Text>
          <Text pb={{ base: '1.188rem', '2xl': '2.188rem' }}>
            We are here to help transform{' '}
            <Text as="strong" className="gradient-text">
              the wild web
            </Text>{' '}
            into a{' '}
            <Text as="strong" className="gradient-text">
              web of opportunity.
            </Text>
          </Text>
          <Text pb={{ base: '1.188rem', '2xl': '2.188rem' }}>
            To help you break into this brave new world, avoid traps,{' '}
            <Text as="strong" className="gradient-text">
              level up
            </Text>{' '}
            &amp;{' '}
            <Text as="strong" className="gradient-text">
              make an impact.
            </Text>
          </Text>
          <Text pb={{ base: '1.188rem', '2xl': '2.188rem' }}>
            To build a new kind of socioeconomic system, optimized for{' '}
            <Text as="strong" className="gradient-text">
              wellbeing over profit.
            </Text>
          </Text>
        </Box>
      </Container>
      <LandingNextButton section={nextSection?.internalLinkId} />
    </FullPageContainer>
  );
};
