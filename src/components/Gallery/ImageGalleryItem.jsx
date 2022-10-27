import PropTypes from 'prop-types';
import Galleryscss from './Gallery.module.scss';

export const GalleryItem = ({ image }) => {
    return (
        <li className={Galleryscss.photoCard}>
            <img
                src={image.webformatURL}
                alt={image.tags}
                data-src={image.largeImageURL}
                id={image.id}
                className={Galleryscss.image}
            />
        </li>
    );
};

GalleryItem.propTypes = {
    image: PropTypes.object,
};
