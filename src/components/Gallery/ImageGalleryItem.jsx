import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const ImageGalleryItem = ({
  description,
  smallImage,
  largeImage,
  openModal,
}) => {
  return (
    <li className={css.imageGalleryItem} onClick={openModal}>
      <img
        src={smallImage}
        alt={description}
        data-large={largeImage}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
