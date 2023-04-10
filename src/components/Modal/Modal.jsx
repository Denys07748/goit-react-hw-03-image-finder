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
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalEl>
                    <img src="" alt="" />
                    {this.props.children}
                    <div>МОДАЛКА!!!</div> 
                </ModalEl>
            </Overlay>, modalRoot
        );
    }
}

export default Modal;