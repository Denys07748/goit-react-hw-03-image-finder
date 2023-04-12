import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import * as API from '../services/Api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    imagesData: [],
    value: '',
    page: 1,
    isLoading: false,
    totalImages: 0,
  }

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state

    if(value === '') {
      toast.warn('The input field cannot be empty.');
      return;
    }

     if (prevState.value !== value) {
      this.setState({ imagesData: [], totalImages: 0 });
      this.getImages(value, page);
     }
  }

  getImages = async (query, page) => {
    try {
      this.setState({isLoading: true})
      const images = await API.getImages(query, page);
      if(images.total === 0) {
        this.setState({isLoading: false});
        toast.error('Sorry, there are no images matching your search query. Please try again.');
      } else {
        this.setState(state => 
        ({ imagesData: [...state.imagesData, ...images.hits], 
           page: page+1,
           totalImages: images.total }));
      }
    } catch (error) {
      toast.error(error);
    } finally {
      this.setState({isLoading: false});
    }   
  }

  handleSearch = (value) => {
    this.setState({ value, page: 1 })
  } 

  render() {
    const { imagesData, isLoading, value, page, totalImages } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        {imagesData.length > 0 && 
        (<ImageGallery images={imagesData}/>)}
        {imagesData.length !== totalImages && !isLoading && imagesData.length > 0 &&
            <Button onLoadMore={() => this.getImages(value, page)}/>}
        {isLoading && <Loader/>}
        <ToastContainer autoClose={3000} theme="colored"/>
      </Container>
    );
  }
};

export default App;
