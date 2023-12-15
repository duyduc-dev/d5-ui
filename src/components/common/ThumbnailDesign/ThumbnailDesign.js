import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EventKey } from '@constants';
import { ELanguageResources } from '@i18n';
import Avatar from '@mui/material/Avatar';
import eventService from '@utils/event';
import { add3DotsString } from '@utils/helper';

import { ButtonDark } from '../Button';
import Popup from '../Popup';
import Tooltip from '../Tooltip';

import StyledAvatarGroup from './StyledAvatarGroup';
import ThumbnailPopup from './ThumbnailPopup';

import style from './styles.module.scss';

const ThumbnailDesign = ({ projectId, dragging, onClick }) => {
  const { t } = useTranslation(ELanguageResources.Common);

  const thumbnailRef = useRef(null);

  const [projName, setProjName] = useState(t`untitledDesign`);

  const handleClickDesign = () => {
    if (dragging) return;
    onClick?.();
  };

  const handlePopupShow = () => {
    eventService.dispatchEvent(EventKey.ThumbnailDesignPopupState, { projectId, isPopupShow: true });
  };
  const handlePopupHidden = () => {
    eventService.dispatchEvent(EventKey.ThumbnailDesignPopupState, { projectId, isPopupShow: false });
  };

  const render = useCallback(() => <ThumbnailPopup projectId={projectId} projectName={projName} />, [projName]);

  useEffect(() => {
    const remove = eventService.listenEvent('Project:change-name', ({ detail: data }) => {
      if (projectId === data.id && data.projectName) setProjName(data.projectName);
    });
    return remove;
  }, []);

  return (
    <Popup onShow={handlePopupShow} onHidden={handlePopupHidden} disabled={dragging} render={render}>
      <div ref={thumbnailRef} className={style.wrapContainer}>
        <div className={style.container}>
          <div className={style.thumbnail}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <div className={style.overlay}></div>
          </div>
        </div>
        <div className={style.content}>
          <p className={style.title}>{add3DotsString(projName, 22)}</p>
          <div className={style.groupInfo}>
            <StyledAvatarGroup max={3}>
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
            <p className={style.typeDesign}>Doc</p>
          </div>
        </div>
        <div className={style.overlayThumbnail}>
          <ButtonDark onClick={handleClickDesign}>{t`design`}</ButtonDark>
          <p className={style.overlayThumbnailType}>Doc</p>
        </div>
      </div>
    </Popup>
  );
};

export default ThumbnailDesign;
