import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home layout__under-header'>
        <img className='home__image' src='https://source.unsplash.com/collection/2203755'/>
        <a className='home__link' href='https://github.com/Maxnelson997/react-nav-template'>VIEW ON GITHUB</a>
      </div>
    );
  }
}
