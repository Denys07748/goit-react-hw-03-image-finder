import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    images: null,
    showModal: false,
    loading: true,
  }

  componentDidMount() {
    // this.setState({ loading: true });
  }

  componentDidUpdate(prevPors, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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

  searchImages = imageData => {
    console.log(imageData);
  }

  render() {
    const { images, showModal, loading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchImages}/>
        {images && (
          <ImageGallery images={this.state.contacts}/>
        )}
        {loading && <Loader/>}
        <Button/>
        <button type='button' onClick={this.toggleModal}>open/close</button>
        {showModal && (
          <Modal onClose={this.toggleModal} />
        )}
      </Container>
    );
  }
  
};

export default App;
