import './App.css';
import Fileimport from './Components/Fileimport';
import Test from './Components/Test';
import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
     <Fileimport />
      </div>
    );
  }
}

export default App;
