import React from 'react';
import style from '../../App.module.css';

function Button({ fetch }) {
  return (
    <div className={style.ButtonFather}>
      <button className={style.Button} onClick={fetch}>
        Load More
      </button>
    </div>
  );
}

export default Button;
