import React, { Component } from 'react';
import Nav from './nav/nav';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Nav className='layout__nav-inset'/>
        {this.props.children}
      </div>
    );
  }
}
