import React from 'react';
import { FaFacebookF, FaRegCircle } from 'react-icons/fa';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { RiFontSize } from 'react-icons/ri';
import { TbMovie, TbPhoto } from 'react-icons/tb';
import { isString } from '@utils/helper';

import { getRootMenu } from '../rawData';

import { MenuRootId } from './const';

export const getCurrentRootMenuId = (pathName) => {
  const folders = getRootMenu();
  return folders.find((folder) => isString(folder?.link) && pathName.includes(folder?.link) && folder.isRoot)?.id ?? '';
};

export const getItemForRoot = (id) => {
  switch (id) {
    case MenuRootId.MENU_TEMPLATE_ID:
      return [
        {
          id: 'social-media',
          label: 'Social media',
          children: [
            {
              icon: <FaFacebookF size={14} />,
              id: 'facebook-story',
              label: 'Facebook Story',
            },
          ],
        },
        {
          id: 'video',
          label: 'Video',
        },
        {
          id: 'education',
          label: 'Education',
        },
      ];
    case MenuRootId.MENU_PROJECT_ID:
      return [
        {
          id: 'my-projects',
          label: 'My projects',
          children: [
            {
              id: 'folder',
              label: 'Folder',
            },
            {
              id: 'design',
              label: 'Design',
            },
          ],
        },
        {
          id: 'shared-with-you',
          label: 'Shared with you',
        },
      ];
    case MenuRootId.MENU_ASSETS_ID:
      return [
        {
          id: 'logos',
          label: 'Logos',
          icon: <FaRegCircle size={18} />,
          overlay: true,
        },
        {
          id: 'colors',
          label: 'Colors',
          link: 'assets/colors',
          icon: <HiOutlineColorSwatch size={18} />,
          overlay: true,
        },
        {
          id: 'typographies',
          label: 'Typographies',
          icon: <RiFontSize size={18} />,
          overlay: true,
        },
        {
          id: 'photos',
          label: 'Photos',
          icon: <TbPhoto size={18} />,
          overlay: true,
        },
        {
          id: 'videos',
          label: 'Videos',
          icon: <TbMovie size={18} />,
          overlay: true,
        },
      ];

    default:
      break;
  }
};
