import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalEl } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate() {}

    handleKeyDown = e => {
            if(e.code === 'Escape') {
                this.props.onClose();
            }
    }

    handleBackdropClick = e => {
        if(e.currentTarget !== e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { image, tags } = this.props;

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalEl>
                    <img src={image} alt={tags} />
                </ModalEl>
            </Overlay>, modalRoot
        );
    }
}

Modal.propTypes = {
        onClose: PropTypes.func.isRequired,
        image: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    };

export default Modal;