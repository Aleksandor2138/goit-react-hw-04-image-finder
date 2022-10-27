import { Component } from "react";
import { IoIosArrowDropup } from 'react-icons/io';
// import PropTypes from 'prop-types';
import Topscss from './Top.module.scss'

export default class Top extends Component {
    // trackScroll = () => {
    //     const scrolled = window.pageYOffset;
    //     const coords = document.documentElement.clientHeight;

    //     if (scrolled > coords) {
    //         topBtn.classList.remove('is-hidden');
    //     }
    //     if (scrolled < coords) {
    //         topBtn.classList.add('is-hidden');
    //     }
    // };
    // window.addEventListener('scroll', trackScroll);

    // функция скроля для плавного пролистывания вверх по клику по кнопке ТОР
    backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    render() {
        return (
            <button
                className={Topscss.top__btn}
                onclick={this.backToTop}
                id="myBtn"
                title="Go to top"
            >
                <IoIosArrowDropup className={Topscss.top__svg} />
            </button>
        );
    }
}