import React, { useState } from 'react';
import Particles from 'react-particles-js';

import Navigation from '../components/shared/Navigation';
import SignInForm from '../components/Form/SignInForm';
import RegisterForm from '../components/Form/RegisterForm';
import ImageLinkInput from '../components/FaceDetection/ImageLinkInput';
import particlesParameters from './particlesjs-config.json';
import './App.css';

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [route, setRoute] = useState('signin');

  const onRouteChange = (theRoute) => {
    if (theRoute === 'signout') {
      setSignedIn(false);
    } else if (theRoute === 'landing') {
      setSignedIn(true);
    }
    setRoute(theRoute);
  };

  return (
    <>
      <Particles
        className="particles"
        params={particlesParameters}
      />
      <Navigation 
        onRouteChange={onRouteChange}
        signedIn={signedIn}
        name={userName} 
      />
      { route === 'landing'
        ? (
          <ImageLinkInput />
        )
        : (route === 'signin'
          ? <SignInForm setUserName={setUserName} onRouteChange={onRouteChange} />
          : <RegisterForm setUserName={setUserName} onRouteChange={onRouteChange} />
        )}
    </>
  );
};

export default App;
