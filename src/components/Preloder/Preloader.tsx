import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../assets/images/Infinity-1s-200px.svg';

const Preloader = () => {
  return (
    <div className={style.pre}>
      <img alt="gg" src={preloader} style={{ height: 200 }} />
    </div>
  );
};

export default Preloader;
