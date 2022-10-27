import PropTypes from 'prop-types';
import Galleryscss from './Gallery.module.scss';
import { GalleryItem } from './ImageGalleryItem';

export const ImagesGallery = ({ images, showModal }) => {
    // function onImageClick(event) {
    //     if (event.target.classList.contains('img')) {
    //         showModal(event.target.id);
    //     }
    // }

    return (
        <section>
            <ul className={Galleryscss.gallery}  onClick={showModal}>
                {images.map(image => (
                    <GalleryItem key={image.id} image={image}></GalleryItem>
                ))}
            </ul>
        </section>
    );
};

ImagesGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    showModal: PropTypes.func,
};
