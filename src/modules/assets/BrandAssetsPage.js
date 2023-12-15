import React from 'react';
import { ContentContainer } from '@components/layouts/BaseLayout';

import ColorCarousel from './components/ColorCarousel';
import FontCarousel from './components/FontCarousel';
import LogoCarousel from './components/LogoCarousel';

const BrandAssetsPage = () => {
  return (
    <ContentContainer>
      <LogoCarousel />
      <FontCarousel />
      <ColorCarousel />
    </ContentContainer>
  );
};

export default BrandAssetsPage;
