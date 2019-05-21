import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js';
import Form from './components/Form';
import OrderList from './components/OrderList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default App;
