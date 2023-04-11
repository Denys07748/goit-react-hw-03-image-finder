import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import * as API from '../services/Api';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    imagesArray: [],
    value: '',
    showModal: false,
    loading: true,
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevPors, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  getImages = async (query, page) => {
      const images = await API.getImages(query, page);
      console.log(images);
      // this.setState(state => ({imagesArray: [...state.imagesArray, ...images]}));
      // console.log(this.state.imagesArray);
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // addContact = contactData => {
  //   const isIncludes = this.state.contacts.some(({name}) => name.toLowerCase() === contactData.name.toLowerCase()); 
  //   if(isIncludes) {
  //     alert(`${contactData.name} is already in contacts`);
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(10),
  //     ...contactData,
  //   }
  
  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }))
  // };

  getValue = async ({value}) => {
    await this.setState({value});
    console.log(this.state.value);
    this.getImages(this.state.value, 1);
  }

  render() {
    const { images, showModal, loading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.getValue}/>
        {images && (
          <ImageGallery images={images}/>
        )}
        {loading && <Loader/>}
        <Button/>
        <button type='button' onClick={this.toggleModal}>open/close</button>
        {showModal && (
          <Modal onClose={this.toggleModal} />
        )}
        <ToastContainer autoClose={3000}/>
      </Container>
    );
  }
  
};

export default App;
