import React from 'react';

import style from './style.module.scss';

const FolderGrid = ({ title, contentGrid = [], renderItem = (item) => item }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapContent}>
        <div className={style.itemGrid}>{renderItem(contentGrid[0])}</div>
        <div className={style.itemGrid}>{renderItem(contentGrid[1])}</div>
        <div className={style.itemGrid}>{renderItem(contentGrid[2])}</div>
        <div className={style.itemGrid}>{renderItem(contentGrid[3])}</div>
      </div>
      <div className={style.title}>{title}</div>
    </div>
  );
};

export default FolderGrid;
