import React, { Component, useState } from 'react';

import Navigation from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import RegisterForm from '../components/RegisterForm';
import ImageLinkInput from '../components/ImageLinkInput';
import DemographicText from '../components/DemographicText';
import ReturnedImage from '../components/ReturnedImage';
import './App.css';

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showText, setShowText] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [route, setRoute] = useState('signin');

  // const signIn = () => setSignedIn(true);
  const updateUserName = () => setUserName('');
  // const setImageUrl = () => imageUrl(url);
  // const setShowText = () => showText();
  // const setGender = () => gender(type);
  // const setAge = () => age();
  // const setRoute = () => route();

  const handleSubmit = () => {
    // setImageUrl({imageUrl: this.state.input})
    fetch('http://localhost:5000/analyseImage', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                // input: input
            })
        })
        .then(res => res.json())
        .then(response => {
            if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'feminine') {
              {setGender('female')}
            } else if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'masculine') {
              {setGender('male')}
            }
            {setAge(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name)};
            {showText(true)}
        })
      .catch(err => console.log(err));
  }

  const onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  const onRouteChange = (theRoute) => {
    if (theRoute === 'signout') {
      setSignedIn(true);
    } else if (theRoute === 'landing') {
      setSignedIn(true);
    }
      {setRoute(theRoute)};
  }

  // render() {
    const style = showText ? {visibility: 'visible'} : {visibility: 'hidden'};

    return (
      <>
      	<Navigation onRouteChange={onRouteChange} signedIn={setSignedIn} name={userName}/>
        { route === 'landing' 
          ? 
          <>
            <DemographicText
                style={style}
                gender={gender} 
                age={age}
              />
              <ImageLinkInput 
                onInputChange={onInputChange}
                handleSubmit={handleSubmit}
              />
              <ReturnedImage 
                style={style}
                imageUrl={imageUrl}
            />
          </>
          : (route === 'signin' 
          ? <SignInForm setUserName={updateUserName} onRouteChange={onRouteChange}/>
          : <RegisterForm setUserName={updateUserName} onRouteChange={onRouteChange}/>
          )
        }
      </>
    );
  // }
}

export default App;
