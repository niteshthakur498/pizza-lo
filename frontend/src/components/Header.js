import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
      		<div className = "container">
                <div className = "header-content">
                  <div className = "logo">PIZZA LO</div>
                  <div className = "navbar">
                    <ul>
                      <li>
                        <NavLink  exact to ='/' activeClassName = "activeNav">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to = '/orders' activeClassName = "activeNav">Order</NavLink>
                      </li>
                      <li>
                        <NavLink to = '/placeorders' activeClassName = "activeNav" className="placeOrder">Place Order</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
          </div>
      </header> 
    );
  }
}

export default Header;
