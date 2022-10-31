import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import Searchbarscss from './Searchbar.module.scss';

const Searchbar = ({submitSearch}) => {
    const [searchPhotoValue, setSearchPhotoValue] = useState('');
    const [keyword, setKeyword] = useState('keyword');
    

    const onChange = (event) => {
        setSearchPhotoValue(event.target.value.toLowerCase());
        setKeyword(event.target.value);
    };

    const findPhoto=(event)=> {
        event.preventDefault();
        if (searchPhotoValue.trim() === '') {
            Notiflix.Notify.failure('Please, fill out the search form');
            return
        }
        submitSearch(searchPhotoValue);
        setSearchPhotoValue ('');
    }
    return (
        <section className={Searchbarscss.hero}>
            <div>
                <h1 className={Searchbarscss.hero__h1}>Incredibly beautiful stock pictures for free</h1>
                <h2 className={Searchbarscss.hero__h2}> Over one million high quality images from our talented community</h2>
            </div>
            <form className={Searchbarscss.hero__form} id="search-form" onSubmit={findPhoto}>
                <input
                    className={Searchbarscss.hero__input}
                    type="text"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onChange}
                    value={searchPhotoValue}
                />
                <button type="submit" className={Searchbarscss.hero__button}>Search</button>
            </form>
            <p className={Searchbarscss.hero__p}>Image search by keyword: <span className={Searchbarscss.hero__keyword}>{keyword}</span></p>
        </section>
    );
};
Searchbar.propTypes = {
    submitSearch: PropTypes.func,
};
export default Searchbar