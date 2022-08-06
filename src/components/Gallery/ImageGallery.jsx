import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';
import ImageGalleryItem from '../Gallery/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ webformatURL, tags, largeImageURL }, idx) => (
          <ImageGalleryItem
            key={idx}
            src={webformatURL}
            alt={tags}
            onClick={() => openModal({ largeImageURL, tags })}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
