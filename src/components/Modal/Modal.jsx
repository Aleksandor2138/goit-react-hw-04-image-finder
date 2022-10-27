import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import Modalscss from './Modal.module.scss'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickEscape);
  }

  // Создаем корневой элемент в DOM для модального окна во время его открытия
  // componentWillMount() {
  //   this.root = document.createElement('div');
  //   document.body.appendChild(this.root);
  // }

  // Удаляем корневой элемент в DOM для модального окна, после закритя модального окна
  componentWillUnmount() {
    // document.body.removeChild(this.root);
    window.removeEventListener('keydown', this.clickEscape);
  }

  clickEscape = (event) => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.popap();
  };

  clickModal = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.popap();
  }
  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={Modalscss.modal}>
        <div className={Modalscss.modal__popap} onClick={this.clickModal}>
          <img src={src} alt={alt} className={Modalscss.modal__img} />
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  }
};
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  popap: PropTypes.func.isRequired,
};