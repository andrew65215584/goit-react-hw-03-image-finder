import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from '../../App.module.css';

function ImageGallery({ articlesArr, toogleModal, getCurrentId }) {
  return (
    <ul className={style.ImageGallery}>
      {articlesArr.map(article => (
        <ImageGalleryItem
          article={article}
          key={article.id}
          toogleModal={toogleModal}
          getCurrentId={getCurrentId}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
