import React, { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LuChevronLeft } from 'react-icons/lu';

import ButtonArrowNavigate from './ButtonArrowNavigate';

const ArrowLeft = () => {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } = useContext(VisibilityContext);
  const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));

  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <ButtonArrowNavigate disabled={disabled} hidden={disabled} onClick={() => scrollPrev()}>
      <LuChevronLeft />
    </ButtonArrowNavigate>
  );
};

export default ArrowLeft;
