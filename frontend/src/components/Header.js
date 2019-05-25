import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
      		<div className = "container">
                <div className = "header-content">
                  <div className = "logo"><Link to="/">PIZZA LO</Link></div>
                  <div className = "navbar">
                    <ul>
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
