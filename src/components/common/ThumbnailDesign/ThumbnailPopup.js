import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiFolder } from 'react-icons/fi';
import { GoCopy, GoLink } from 'react-icons/go';
import { IoShareSocialOutline } from 'react-icons/io5';
import { LuDot, LuTrash2 } from 'react-icons/lu';
import { MdOutlineFileDownload } from 'react-icons/md';
import { EventKey } from '@constants';
import { ELanguageResources } from '@i18n';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { animated, useSpring } from '@react-spring/web';
import eventService, { dispatchEvent } from '@utils/event';
import clsx from 'clsx';

import useEventListener from '@/hooks/useEventListener';

import { ButtonOverlay } from '../Button';
import Tooltip from '../Tooltip';

import StyledAvatarGroup from './StyledAvatarGroup';

import styles from './styles.module.scss';

const ThumbnailPopup = ({ projectId, projectName = '' }) => {
  const { t } = useTranslation(ELanguageResources.Common);

  const inputRef = useRef(null);

  const [valueInput, setValueInput] = useState(projectName.trim());
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isInputShaking, setInputShaking] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: isInputShaking ? 1 : 0,
    reset: true,
    reverse: (x) => x === 1,
    onRest: () => setInputShaking(false),
  });

  const renameProjectHelper = (newName) => {
    setIsVisibleInput(false);
    setIsNameInvalid(false);
    dispatchEvent('Project:change-name', {
      id: projectId,
      projectName: newName,
    });
    setValueInput(newName);
  };

  const handleInputKeyDown = (e) => {
    switch (e?.key) {
      case 'Enter':
        if (valueInput) {
          renameProjectHelper(valueInput);
          break;
        } else {
          setInputShaking(true);
          setIsNameInvalid(true);
        }
        break;
      case 'Escape':
        setValueInput(projectName);
        setInputShaking(false);
        setIsNameInvalid(false);
        setIsVisibleInput(false);
        break;
    }
  };

  const handleBlurInput = () => {
    renameProjectHelper(valueInput || projectName);
  };

  const handleShowEditNameProj = () => {
    setIsVisibleInput(true);
    requestIdleCallback(() => inputRef.current?.focus());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };

  useEventListener('keydown', (e) => {
    if (isPopupShown && e.key === 'r') {
      handleShowEditNameProj();
    }
  });

  useEffect(() => {
    const removeEvent = eventService.listenEvent(EventKey.ThumbnailDesignPopupState, ({ detail: data }) => {
      const { projectId: projId, isPopupShow } = data;
      if (projectId === projId) {
        setIsPopupShown(isPopupShow);
      }
    });
    return removeEvent;
  }, []);

  return (
    <div className={styles.thumbnailPopupContainer}>
      <animated.div
        style={{
          transform: x.to([0, 0.25, 0.5, 0.75, 1], [0, -10, 10, -10, 0]).to((x) => `translateX(${x}px)`),
        }}
        className={clsx(styles.wrapTitleBox, {
          [styles.focusing]: isVisibleInput,
          [styles.nameInvalid]: isNameInvalid,
        })}
        onClick={handleShowEditNameProj}
      >
        {isVisibleInput ? (
          <input
            ref={inputRef}
            spellCheck="false"
            autoComplete="off"
            className={clsx(styles.inputRename)}
            value={valueInput}
            onBlur={handleBlurInput}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        ) : (
          <h3 className={styles.titlePopup}>{valueInput}</h3>
        )}
      </animated.div>
      <p className={styles.infoPopup}>
        <span>Instagram post</span>
        <LuDot />
        <span>Dang Duy Duc</span>
        <LuDot />
        <span>Edited 3 days ago</span>
      </p>
      <StyledAvatarGroup sx={{ justifyContent: 'start', my: 'var(--spacing-2)' }} max={3}>
        <Tooltip title="Dang Duy Duc (owner)">
          <Avatar
            sx={{ width: 20, height: 20, cursor: 'pointer' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
          />
        </Tooltip>
        <Avatar
          sx={{ width: 20, height: 20 }}
          src="https://avatar.canva.com/avatars/users/ac5b91e8-3f89-41e1-bc7d-c9ec5a0423e7/50.jpg"
        />
        <Avatar
          sx={{ width: 20, height: 20 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
        />
        <Avatar
          sx={{ width: 20, height: 20 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
        />
      </StyledAvatarGroup>
      <Divider sx={{ my: 'var(--spacing-2)' }} />
      <div>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <GoCopy size={18} />
          {t`makeACopy`}
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <FiFolder size={18} />
          {t`moveToFolder`}
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <MdOutlineFileDownload size={18} />
          {t`download`}
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <IoShareSocialOutline size={18} />
          {t`share`}
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <GoLink size={18} />
          {t`copyLink`}
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnPopup} fullWidth overlayHover>
          <LuTrash2 size={18} />
          {t`moveToTrash`}
        </ButtonOverlay>
      </div>
    </div>
  );
};

export default ThumbnailPopup;
