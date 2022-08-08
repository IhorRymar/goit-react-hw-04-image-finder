import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const Button = ({ incrementPage }) => {
  return (
    <button
      type="button"
      className={css.loadMore}
      onClick={() => incrementPage()}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};

export default Button;
