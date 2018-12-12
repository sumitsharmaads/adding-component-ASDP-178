import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Contant from './Contant';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Nav />
      <Contant/>
      <Section />
      </div >
    );
  }
}

export default App;
