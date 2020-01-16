import React, { useState } from 'react';

import Navigation from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import RegisterForm from '../components/RegisterForm';
import ImageLinkInput from '../components/ImageLinkInput';
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
      <Navigation onRouteChange={onRouteChange} signedIn={signedIn} name={userName} />
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
