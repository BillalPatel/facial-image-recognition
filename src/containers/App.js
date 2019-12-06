import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';

import Navigation from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import ImageLinkInput from '../components/ImageLinkInput';
import DemographicText from '../components/DemographicText';
import ReturnedImage from '../components/ReturnedImage';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd1cf986c507b4100aa06b7fec7935329'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      showText: false,
      gender: '',
      age: ''
    }
  }

  handleSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.DEMOGRAPHICS_MODEL, 
      this.state.input)
      .then(response => {
        if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'feminine') {
          this.setState({gender: 'female'})
        } else if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'masculine') {
          this.setState({gender: 'male'})
        }
        this.setState({age: response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name});
        this.setState({showText: true});
      })
      .catch(err => console.log(err));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  render() {
    const { imageUrl, showText, gender, age } = this.state;

    const style = showText ? {visibility: 'visible'} : {visibility: 'hidden'};

    return (
      <Fragment>
      	<Navigation />
        <SignInForm />
        <DemographicText 
          style={style}
          gender={gender} 
          age={age}
        />
        <ImageLinkInput 
          onInputChange={this.onInputChange}
          handleSubmit={this.handleSubmit}
        />
        <ReturnedImage 
          style={style}
          imageUrl={imageUrl} 
        />
      </Fragment>
    );
  }
}

export default App;
