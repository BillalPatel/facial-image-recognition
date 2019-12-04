import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';

import Navigation from '../components/Navigation';
import ImageLinkInput from '../components/ImageLinkInput';
import ReturnedImage from '../components/ReturnedImage';
import Footer from '../components/Footer';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd1cf986c507b4100aa06b7fec7935329'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      // input: '',
      loading: true,
      imageUrl: ''
    }
  }

  handleSubmit = (event) => {
    const {imageUrl} = this.state;
    this.setState({imageUrl: event.target.value})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, imageUrl)
      .then(response => {
        console.log(response.status.code)
      })
      .catch(err => console.log(err))
  } 
  
  render() {
    const { loading, imageUrl } = this.state;

    return (
      <Fragment>
      	<Navigation />
        <ImageLinkInput 
          handleSubmit = {this.handleSubmit}
          loading = {loading} 
        />
        <ReturnedImage imageUrl = {imageUrl} />
      	{/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
