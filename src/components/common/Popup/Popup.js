import React, { memo, useMemo } from 'react';
import { useSpring } from '@react-spring/web';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import Wrapper from './Wrapper';

import styles from './style.module.scss';

const Popup = (props) => {
  const {
    children,
    placement = 'right-start',
    render,
    onMount,
    onHide,
    popupClassName,
    wrapChildrenClassName,
    disabled,
    visible,
    ...restProps
  } = props;

  const config = { tension: 300, friction: 15 };
  const initialStyles = { opacity: 0, transform: 'translateY(20px)' };

  const [propsSpring, setSpring] = useSpring(() => initialStyles, []);

  function handleMount() {
    setSpring?.start({
      opacity: 1,
      transform: 'translateY(0)',
      onRest: () => {},
      config,
    });
    onMount?.();
  }

  function handleHide({ unmount }) {
    setSpring?.start({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
    onHide?.();
  }

  const tippyProps = useMemo(() => {
    const _props = {};
    if (visible === undefined) {
      _props.hideOnClick = false;
    } else {
      _props.visible = visible;
    }
    return { ..._props };
  }, [visible]);

  return (
    <Tippy
      disabled={disabled}
      offset={[8, 8]}
      delay={[600, 100]}
      interactive
      onMount={handleMount}
      onHide={handleHide}
      animation
      popperOptions={{ strategy: 'fixed' }}
      placement={placement}
      render={(attrs) => (
        <Wrapper {...attrs} className={clsx(styles.wrapPopup, popupClassName)} style={propsSpring}>
          {render()}
        </Wrapper>
      )}
      {...tippyProps}
      {...restProps}
    >
      <div className={clsx(styles.wrapChildren, wrapChildrenClassName)}>{children}</div>
    </Tippy>
  );
};

export default memo(Popup);
