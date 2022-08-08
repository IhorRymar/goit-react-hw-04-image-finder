import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const modal = document.querySelector('#modal');

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { currentImageUrl, currentImageDescription } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.handleClickBackdrop}>
        <div className={css.modal}>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </div>
      </div>,
      modal
    );
  }
}

export default Modal;
