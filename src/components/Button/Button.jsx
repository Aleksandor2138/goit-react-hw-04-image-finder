import PropTypes from 'prop-types';
import  Button  from './Button.module.scss';

export const LoadMore = ({ loadMore }) => {
    function onButtonClick() {
        loadMore();
    }
    return <button className={Button.loadMore} onClick={onButtonClick}>Load more</button>;
};

LoadMore.propTypes = {
    loadMore: PropTypes.func,
};
