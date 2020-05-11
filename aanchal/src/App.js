import React, { Component } from 'react';
import './App.css';
import CustomerApp from './component/CustomerApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CustomerApp />
      </div>
    );
  }
}

export default App;