import React from 'react';
import Box from '@mui/material/Box';

import styles from './style.module.scss';

const PuffLoader = (props) => {
  const { size = 16, color = '#161616', borderWidth = 2 } = props;

  return (
    <Box component="span" sx={{ width: size, height: size }} className={styles.container}>
      <Box component="span" sx={{ borderColor: color, borderWidth: borderWidth }} className={styles.firstLayer}>
        <Box
          component="span"
          sx={{ borderColor: color, borderWidth: borderWidth }}
          className={styles.secondLayer}
        ></Box>
      </Box>
    </Box>
  );
};

export default PuffLoader;
