import React, { Component } from 'react';
import Nav from './nav/nav';
import Footer from './footer/footer';
import BackgroundImage from './universalComponents/backgroundImage';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Nav className='layout__nav-inset'/>
        {this.props.children}
        <Footer className='layout__footer-inset'/>
        <BackgroundImage className='layout__background' src='/assets/snow.jpeg'/>
      </div>
    );
  }
}
