import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home'
import Form from './components/Form';
import OrderList from './components/OrderList';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact strict path='/' component={Home}/> 
          <Route path='/home'>
            <Redirect to = "/"/>
          </Route>
          <Route path = '/placeOrder' component = {Form}/>
          <Route path = '/orders' component = {OrderList}/>
          <Route component = {NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
