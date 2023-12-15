import React from 'react';
import {
  HiOutlineFolderOpen,
  HiOutlineTemplate,
  HiOutlineTrash,
  HiOutlineUserGroup,
  HiOutlineViewGridAdd,
} from 'react-icons/hi';
import { LuPencilRuler } from 'react-icons/lu';
import { PiHouseSimpleBold } from 'react-icons/pi';
import i18n from '@i18n';

import { MenuRootId } from './factory/const';

const { t } = i18n;

export const getRootMenu = () => {
  return [
    {
      id: MenuRootId.MENU_HOME_ID,
      label: t`home`,
      icon: <PiHouseSimpleBold size={18} />,
      link: '',
      isRoot: true,
    },
    {
      id: MenuRootId.MENU_TEMPLATE_ID,
      label: t`templates`,
      icon: <HiOutlineTemplate size={18} />,
      link: 'templates',
      isRoot: true,
      children: [],
    },
    {
      id: MenuRootId.MENU_RULE_ID,
      label: t`rules`,
      icon: <LuPencilRuler size={18} />,
      isRoot: true,
    },
    {
      id: MenuRootId.MENU_ASSETS_ID,
      label: t`assets`,
      icon: <HiOutlineViewGridAdd size={18} />,
      isRoot: true,
      link: 'assets',
    },
    {
      separator: true,
      id: 'separator',
    },
    {
      id: MenuRootId.MENU_PROJECT_ID,
      label: t`projects`,
      icon: <HiOutlineFolderOpen size={18} />,
      isRoot: true,
    },
    {
      id: MenuRootId.MENU_TRASH_ID,
      label: t`trash`,
      icon: <HiOutlineTrash size={18} />,
      isRoot: true,
    },
    {
      id: 'separator',
      separator: true,
    },
    {
      id: MenuRootId.MENU_TEAM_ID,
      label: t`team`,
      icon: <HiOutlineUserGroup size={18} />,
      isRoot: true,
    },
  ];
};
