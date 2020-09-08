import React from 'react';
import style from '../../App.module.css';

function ImageGalleryItem({ article, toogleModal, getCurrentId }) {
  const handleArticleClick = id => {
    toogleModal();
    getCurrentId(id);
  };

  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={article.webformatURL}
        alt=""
        id={article.id}
        className={style.ImageGalleryItemImage}
        onClick={() => handleArticleClick(article.id)}
      />
    </li>
  );
}

export default ImageGalleryItem;
