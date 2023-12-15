import React, { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LuChevronRight } from 'react-icons/lu';

import ButtonArrowNavigate from './ButtonArrowNavigate';

const ArrowRight = () => {
  const { isLastItemVisible, scrollNext, visibleElements } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(!visibleElements.length && isLastItemVisible);

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <ButtonArrowNavigate right disabled={disabled} hidden={disabled} onClick={() => scrollNext()}>
      <LuChevronRight />
    </ButtonArrowNavigate>
  );
};

export default ArrowRight;
