import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';

import Navigation from '../components/Navigation';
import ImageLinkInput from '../components/ImageLinkInput';
import DemographicText from '../components/DemographicText';
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
      imageUrl: '',
      gender: '',
      age: ''
    }
  }
  
  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  handleSubmit = (event) => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.DEMOGRAPHICS_MODEL, 
      this.state.input)
      .then(response => {
        this.setState({gender: response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name});
        this.setState({age: response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name});
      })
      .catch(err => console.log(err));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  render() {
    const { loading, imageUrl, gender, age } = this.state;

    return (
      <Fragment>
      	<Navigation />
        <DemographicText gender = {gender} age = {age}/>
        <ImageLinkInput 
          onInputChange={this.onInputChange}
          handleSubmit = {this.handleSubmit}
          // loading = {loading} 
        />
        <ReturnedImage imageUrl = {imageUrl} />
      	{/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
