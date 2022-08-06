import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const ErrorSearch = ({ message }) => {
  return (
    <div className={css.errorWrapper} role="alert">
      <p>{message}</p>
    </div>
  );
};

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorSearch;
