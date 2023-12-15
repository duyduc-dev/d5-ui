import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import clsx from 'clsx';

import useDrag from '@/hooks/useDrag';

import 'react-horizontal-scrolling-menu/dist/styles.css';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

import styles from './style.mosule.scss';

const ScrollHorizontal = ({ className, itemClassName, items = [], renderItem = () => {} }) => {
  const { dragging, dragMove, dragStart, dragStop } = useDrag();

  const handleStartDrag =
    ({ scrollContainer }) =>
    (e) => {
      dragMove(e, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
    };

  return (
    <div
      className={clsx(styles.container, className)}
      onMouseLeave={() => {
        dragStop();
      }}
    >
      <ScrollMenu
        scrollContainerClassName={styles.scrollContainer}
        wrapperClassName={styles.wrapScroll}
        LeftArrow={ArrowLeft}
        RightArrow={ArrowRight}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleStartDrag}
      >
        {items.map((item, index) => (
          <div key={`${index}-scroll-menu`} className={clsx(styles.itemContainer, itemClassName)}>
            {renderItem?.(item, { index, dragging })}
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ScrollHorizontal;
