import React, { Component } from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="card">
        <Info />
        <div className="text-section">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
