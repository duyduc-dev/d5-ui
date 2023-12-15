import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown, AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ButtonLink, ButtonOverlay } from '@components/common/Button';
import Tooltip from '@components/common/Tooltip';
import { AppRouter, EventKey } from '@constants';
import { ELanguageResources } from '@i18n';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useLayoutStore } from '@store';
import { listenEvent } from '@utils/event';
import { add3DotsString } from '@utils/helper';

import PopoverCreateDesign from './PopoverCreateDesign';
import StyledPopover from './StyledPopover';

import style from './style.module.scss';

const MainHeader = () => {
  const { t } = useTranslation(ELanguageResources.Common);
  const navigate = useNavigate();

  const { isLeftBarOpen, setLeftBarOpen } = useLayoutStore();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShowToggleLeftBar, setIsShowToggleLeftBar] = useState(true);
  const avatarRef = useRef(null);

  const handleOpenMenuAvatar = () => setIsOpenMenu(true);
  const handleCloseMenuAvatar = () => setIsOpenMenu(false);
  const handleClickMenu = () => {
    setLeftBarOpen(!isLeftBarOpen);
  };
  const handleNavigateHome = () => navigate(AppRouter.HOME);

  useEffect(() => {
    const remove = listenEvent(EventKey.HeaderToggleShowMenuLeftBar, ({ detail: data }) => {
      setIsShowToggleLeftBar(data.isVisible);
    });
    return remove;
  }, []);

  return (
    <header className={style.headerContainer}>
      <div className={style.innerHeader}>
        <div>
          {isShowToggleLeftBar && (
            <ButtonOverlay onClick={handleClickMenu}>
              <AiOutlineMenu size={24} />
            </ButtonOverlay>
          )}
          <ButtonOverlay onClick={handleNavigateHome} className={style.logoObollo}>{t`D5`}</ButtonOverlay>
        </div>
        <div className={style.headerLeft}>
          <Tooltip title={t`settings`}>
            <ButtonOverlay className={style.icon}>
              <AiOutlineSetting size={24} />
            </ButtonOverlay>
          </Tooltip>
          <PopoverCreateDesign />
          <div>
            <ButtonOverlay
              id="btn-dropdown-avatar"
              aria-describedby="dropdown-avatar"
              className={style.btnAvatar}
              ref={avatarRef}
              onClick={handleOpenMenuAvatar}
            >
              <Avatar sx={{ width: 28, height: 28 }} />
              <AiFillCaretDown size={12} />
            </ButtonOverlay>
            <StyledPopover
              id="dropdown-avatar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={isOpenMenu}
              anchorEl={avatarRef.current}
              onClose={handleCloseMenuAvatar}
              sx={{ width: 300 }}
            >
              <div className={style.containerPopover}>
                <div className={style.avatarInfoPopoverContainer}>
                  <Avatar sx={{ width: 32, height: 32 }} />
                  <div className={style.avatarInfoPopoverInner}>
                    <h3>
                      {add3DotsString(
                        'Dang Duy Duc 131312312312313123123 Duy Duc ng Duy Duc Dang Duy Duc231313131231231231232',
                        20
                      )}
                    </h3>
                    <p>{add3DotsString('dangduyducdangduyd312uc@gmail.com', 25)}</p>
                  </div>
                </div>
                <div className={style.divider}>
                  <Divider />
                </div>
                <ButtonOverlay fullWidth className={style.accountSetting}>{t`accountSetting`}</ButtonOverlay>
                <ButtonLink to={AppRouter.LOGIN} className={style.btnSignOut}>{t`signOut`}</ButtonLink>
              </div>
            </StyledPopover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
