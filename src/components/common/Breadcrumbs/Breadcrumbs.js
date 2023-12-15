import React from 'react';
import { Link } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import clsx from 'clsx';

import styles from './style.module.scss';

const Breadcrumbs = ({ data = [] }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {data.map((item, index) => (
        <Link className={clsx(styles.link, { [styles.active]: item.active })} to={item.link} key={`${index}`}>
          {item.title}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
