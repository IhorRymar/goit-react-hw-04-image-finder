import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';
import ImageGalleryItem from '../Gallery/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, description, smallImage, largeImage }) => (
          <ImageGalleryItem
            key={id}
            description={description}
            smallImage={smallImage}
            largeImage={largeImage}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
