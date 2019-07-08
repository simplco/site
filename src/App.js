import React from 'react';
import './App.css';

import Navbar from './containers/Navbar';
import Tagline from './containers/Tagline';
import MissionStatement from './containers/MissionStatement';
import Signup from './containers/Signup';
import ProductInfo from './containers/ProductInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Tagline/>
      <MissionStatement/>
      <ProductInfo/>
      <Signup/>
    </div>
  );
}

export default App;
