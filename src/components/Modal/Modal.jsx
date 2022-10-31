import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Modalscss from './Modal.module.scss';

const Modal = ({ src, alt, popap }) => {
  useEffect(() => {
    window.addEventListener('keydown', clickEscape);
    return () => {
      window.removeEventListener('keydown', clickEscape);
    };
  }, []);

  const clickEscape = event => {
    if (event.code !== 'Escape') {
      return;
    }
    popap();
  };

  const clickModal = event => {
    if (event.target !== event.currentTarget) {
      return;
    }
    popap();
  };
  return createPortal(
    <div className={Modalscss.modal}>
      <div className={Modalscss.modal__popap} onClick={clickModal}>
        <img src={src} alt={alt} className={Modalscss.modal__img} />
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  popap: PropTypes.func.isRequired,
};
export default Modal;
