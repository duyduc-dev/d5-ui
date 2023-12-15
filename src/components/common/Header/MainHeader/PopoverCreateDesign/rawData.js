import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa6';
import { LuPresentation } from 'react-icons/lu';
import { PiNoteBlankBold } from 'react-icons/pi';

export const itemDesign = [
  {
    icon: <PiNoteBlankBold size={18} />,
    label: 'Blank design',
  },
  {
    icon: <LuPresentation size={18} />,
    label: 'Presentation',
  },
  {
    icon: <FaFacebook size={16} />,
    label: 'Facebook story',
  },
  {
    icon: <AiFillInstagram size={16} />,
    label: 'Instagram posts',
  },
];
