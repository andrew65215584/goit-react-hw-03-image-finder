import React from 'react';
import style from '../../App.module.css';

function Modal({ toogleModal, getCurrentImage }) {
  const handleImageClick = () => {
    toogleModal();
  };

  return (
    <div className={style.Overlay} onClick={handleImageClick}>
      <div className={style.Modal}>
        <img src={getCurrentImage()} alt="" />
      </div>
    </div>
  );
}

export default Modal;
