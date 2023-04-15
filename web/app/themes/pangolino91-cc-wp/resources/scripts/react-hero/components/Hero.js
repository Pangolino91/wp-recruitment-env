import React from 'react';
import TopHeadings from '@src/scripts/react-hero/components/top_headings/TopHeadings';
import Gallery from '@src/scripts/react-hero/components/gallery/Gallery';
import { ACFContextProvider } from '@src/scripts/react-hero/store/store.js';

const Hero = () => {
  return (
    <>
      <ACFContextProvider>
          <TopHeadings />
          <Gallery />
      </ACFContextProvider>
    </>
  );
};

export default Hero;
