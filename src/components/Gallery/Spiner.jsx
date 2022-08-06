import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

import css from '../Gallery/Styles.module.css';

const Spiner = () => {
  return (
    <div className={css.spiner}>
      <BallTriangle
        color="#3f51b5"
        height={300}
        width={300}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spiner;
