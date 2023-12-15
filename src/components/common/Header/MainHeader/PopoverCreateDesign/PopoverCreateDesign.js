import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoSearch } from 'react-icons/io5';
import { ButtonDark, ButtonOverlay } from '@components/common/Button';
import Input from '@components/common/Input';
import { ELanguageResources } from '@i18n';

import StyledPopover from '../StyledPopover';

import { itemDesign } from './rawData';

import styles from './style.module.scss';

const PopoverCreateDesign = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  const createDesignRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ButtonDark onClick={handleOpen} id="createDesign" aria-describedby="dropdown-design" ref={createDesignRef}>
        {t`createDesign`}
      </ButtonDark>
      <StyledPopover
        maxHeight="70vh"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleClose}
        open={isOpen}
        id="dropdown-design"
        anchorEl={createDesignRef.current}
      >
        <div className={styles.containerPopover}>
          <Input
            iconLeft={<IoSearch size={20} />}
            placeholder={t`searchTemplate`}
            containerClassName={styles.inputSearch}
          />
          <p className={styles.suggested}>{t`suggested`}</p>
          <div className={styles.containerListOption}>
            {itemDesign.map((item, i) => (
              <ButtonOverlay overlayHover fullWidth key={`${i}-item`} className={styles.itemOption}>
                {item.icon}
                <p>{item.label}</p>
              </ButtonOverlay>
            ))}
          </div>
        </div>
      </StyledPopover>
    </div>
  );
};

export default PopoverCreateDesign;
