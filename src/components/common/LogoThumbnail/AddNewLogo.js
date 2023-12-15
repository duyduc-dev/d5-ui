import React from 'react';
import { BsPlusSquareDotted } from 'react-icons/bs';

import style from './style.module.scss';

const AddNewLogo = () => {
  return (
    <div className={style.containerAddNewLogo}>
      <div className={style.innerAddNewLogo}>
        <BsPlusSquareDotted size={32} />
      </div>
    </div>
  );
};

export default AddNewLogo;
