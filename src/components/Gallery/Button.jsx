import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button
      type="button"
      className={css.loadMore}
      onClick={() => handleLoadMore()}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
