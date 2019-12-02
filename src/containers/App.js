import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import ImageLinkInput from '../components/ImageLinkInput';
import Footer from '../components/Footer';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd1cf986c507b4100aa06b7fec7935329'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      loading: true
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  // onSubmit = ()
  
  render() {
    const { loading } = this.state;

    return (
      <Fragment>
      	<Logo />
      	<Navigation />
      	<Form />
        <ImageLinkInput 
          onInputChange = { this.onInputChange }
          loading = { loading } 
        />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
