import React from 'react';
import { IoPeopleOutline } from 'react-icons/io5';
import Avatar from '@mui/material/Avatar';
import { useLayoutStore } from '@store';
import clsx from 'clsx';

import { ButtonOverlay } from '../Button';
import TreeFolder from '../TreeFolder';

import style from './leftBar.module.scss';

const LeftBarNavigate = () => {
  const { isLeftBarOpen } = useLayoutStore();

  return (
    <div className={clsx(style.container, !isLeftBarOpen && style.hidden)}>
      <ButtonOverlay fullWidth className={style.containerTeam}>
        <Avatar sx={{ width: 32, height: 32, fontSize: 13 }}>DD</Avatar>
        <div className={style.textContainer}>
          <h4 className={style.title}>Digiex&apos;s Team</h4>
          <div className={style.teamCount}>
            <IoPeopleOutline size={16} />
            <span>2</span>
          </div>
        </div>
      </ButtonOverlay>

      <div className={style.containerTreeFolder}>
        <TreeFolder />
      </div>
    </div>
  );
};

export default LeftBarNavigate;
