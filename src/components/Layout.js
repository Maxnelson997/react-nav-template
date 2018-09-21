import React, { Component } from 'react';
import Navigation from './navigation';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}
