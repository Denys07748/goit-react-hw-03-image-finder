import PropTypes from 'prop-types';
import ImageGalleryItem from "./ImageGalleryItem";
import { Gallery, Item } from "./ImageGallery.styled";

const ImageGallery = ({images}) => {
    return (
        <Gallery>
            {images.map(({id, name}) => 
                <Item key={id}>
                    <ImageGalleryItem name={name}/>
                </Item>
            )}
        </Gallery>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}