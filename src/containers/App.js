import React, { Component, Fragment } from 'react';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Logo />
      	<Form />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
