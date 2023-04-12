import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
    state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


    render() {
        const { showModal } = this.state;
        const { webformatURL, largeImageURL, tags } = this.props.image;

        return (
        <div onClick={this.toggleModal}>
            <img src={webformatURL} alt={tags} />
            {showModal && (<Modal onClose={this.toggleModal} image={largeImageURL} tags={tags} />)}
        </div>
        )
    }
    
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
}

export default ImageGalleryItem;