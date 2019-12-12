import React, { Component } from 'react';
import axios from 'axios'
import Clarifai from 'clarifai';

import Navigation from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import RegisterForm from '../components/RegisterForm';
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
      signedIn: false,
      userName: '',
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      },
      imageUrl: '',
      showText: false,
      gender: '',
      age: '',
      route: 'signin'
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

  createUser = (userData) => {
    this.setState({
      user: {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          joined: userData.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onRouteChange = (theRoute) => {
    if (theRoute === 'signout') {
      this.setState({signedIn: false});
    } else if (theRoute === 'landing') {
      this.setState({signedIn: true});
    }
    this.setState({route: theRoute})
  }

  setUserName = () => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        this.setState({
          userName: res.data[0].name
        })
      })
  }

  render() {
    const { signedIn, userName, imageUrl, showText, gender, age, route } = this.state;
    const style = showText ? {visibility: 'visible'} : {visibility: 'hidden'};

    return (
      <>
      	<Navigation onRouteChange={this.onRouteChange} signedIn={signedIn} name={userName}/>
        { route === 'landing' 
          ? 
          <>
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
          </>
          : (route === 'signin' 
          ? <SignInForm onRouteChange={this.onRouteChange} setUserName={this.setUserName}/>
          : <RegisterForm createUser={this.createUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </>
    );
  }
}

export default App;