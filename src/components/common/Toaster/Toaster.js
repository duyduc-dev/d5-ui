import React, { useEffect } from 'react';
import { EventKey } from '@constants';
import { useToasterStore } from '@store';
import eventService from '@utils/event';
import clsx from 'clsx';

import { ButtonOverlay } from '../Button';
import { PuffLoader } from '../Loader';

import styles from './toaster.module.scss';

const Toaster = () => {
  const { label, loading, visible, duration, closeOnClick, setToast, setVisible } = useToasterStore();

  const handleClickToast = () => {
    closeOnClick &&
      setTimeout(() => {
        setVisible(false);
      }, 500);
  };

  useEffect(() => {
    let timer;
    if (!loading && visible) {
      timer = setTimeout(() => {
        setToast({
          label: '',
          loading: false,
          visible: false,
          closeOnClick: false,
        });
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [visible, loading]);

  useEffect(() => {
    const remove = eventService.listenEvent(EventKey.ToasterState, ({ detail: data }) => {
      setToast(data);
    });
    return remove;
  }, []);

  return (
    <div className={clsx(styles.container, !visible && styles.hidden)}>
      <ButtonOverlay onClick={handleClickToast} fullHeight fullWidth className={styles.innerContainer}>
        {loading && <PuffLoader />}
        <span className={styles.content}>{label}</span>
      </ButtonOverlay>
    </div>
  );
};

export default Toaster;
