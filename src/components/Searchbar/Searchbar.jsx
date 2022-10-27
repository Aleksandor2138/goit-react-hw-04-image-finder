import  { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import Searchbarscss from './Searchbar.module.scss';

export default class Searchbar extends Component {
    state = {
        searchPhotoValue: '',
        keyword:'keyword',
    };

    onChange=(event)=> {
        this.setState({
            searchPhotoValue: event.target.value.toLowerCase(),
            keyword: event.currentTarget.value,
        });
    };

    findPhoto=(event)=> {
        event.preventDefault();
        if (this.state.searchPhotoValue.trim() === '') {
            Notiflix.Notify.warning('Please, fill out the search form');
            return
        }
        this.props.submitSearch(this.state.searchPhotoValue);
        this.setState({ searchPhotoValue:'',})
    }
    render() {
        return (
            <section className={Searchbarscss.hero}>
                <div>
                    <h1 className={Searchbarscss.hero__h1}>Incredibly beautiful stock pictures for free</h1>
                    <h2 className={Searchbarscss.hero__h2}> Over one million high quality images from our talented community</h2>
                </div>
                <form className={Searchbarscss.hero__form} id="search-form" onSubmit={this.findPhoto}>
                    <input
                        className={Searchbarscss.hero__input}
                        type="text"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.onChange}
                        value={this.state.searchPhotoValue}
                    />
                    <button type="submit" className={Searchbarscss.hero__button}>Search</button>
                </form>
                <p className={Searchbarscss.hero__p}>Image search by keyword: <span className={Searchbarscss.hero__keyword}>{this.state.keyword}</span></p>
            </section>
        );
    }
};
Searchbar.propTypes = {
    submitSearch: PropTypes.func,
};