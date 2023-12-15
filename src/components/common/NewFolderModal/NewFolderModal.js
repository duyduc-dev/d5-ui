import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ELanguageResources } from '@i18n';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

import useEventListener from '@/hooks/useEventListener';

import { ButtonDark, ButtonOverlay } from '../Button';
import Input from '../Input';

import styles from './style.module.scss';

const NewFolderModal = ({ onClose, open, onClickCreateFolder = () => {} }) => {
  const { t } = useTranslation(ELanguageResources.Common);

  const untitledFolder = t`untitledFolder`;
  const [valueNameFolder, setValueNameFolder] = useState(untitledFolder);

  const inputNameFolder = useRef();

  const handleCloseModalCreateFolder = () => {
    onClose?.();
    setValueNameFolder(untitledFolder);
  };

  const handleClickCreateFolder = () => {
    onClickCreateFolder?.(valueNameFolder);
    requestIdleCallback(() => {
      onClose?.();
      setValueNameFolder(untitledFolder);
    });
  };

  useEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleClickCreateFolder();
    }
  });

  useEffect(() => {
    if (open) {
      requestIdleCallback(() => {
        inputNameFolder.current?.focus();
        inputNameFolder.current?.select();
      });
    }
  }, [open]);

  return (
    <Modal
      sx={{ zIndex: 9999 }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      onClose={onClose}
      open={open}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={open}>
        <div className={styles.modalCreateFolderContainer}>
          <div className={styles.inner}>
            <h4 className={styles.newFolder}>{t`newFolder`}</h4>
            <Input
              placeholder={untitledFolder}
              ref={inputNameFolder}
              containerClassName={styles.inputNameFolder}
              value={valueNameFolder}
              onChange={(e) => setValueNameFolder(e.target.value)}
            />
            <div className={styles.btnGroup}>
              <ButtonOverlay onClick={handleCloseModalCreateFolder}>{t`cancel`}</ButtonOverlay>
              <ButtonDark onClick={handleClickCreateFolder}>{t`create`}</ButtonDark>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
NewFolderModal.displayName = 'NewFolderModal';
export default NewFolderModal;
