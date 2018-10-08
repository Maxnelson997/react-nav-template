import React, { Component } from 'react';
import Nav from './nav/nav';
import Footer from './footer/footer';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Nav className='layout__nav-inset'/>
        {this.props.children}
        <Footer className='layout__footer-inset'/>
      </div>
    );
  }
}
