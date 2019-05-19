import React, { Component } from 'react';


class Label extends Component {
    render() {
      if (this.props.hasLabel === 'true') {
        return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
      }
      else {
        return null;
      }
    }
  }

export default Label;