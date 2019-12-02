import React, { Component, Fragment } from 'react';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import ImageLink from '../components/ImageLink';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  
  render() {
    const { loading } = this.state;

    return (
      <Fragment>
      	<Logo />
      	<Navigation />
      	<Form />
        <ImageLink loading = { loading } />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
