import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home layout__content-inset'>
        <h1 className='home__title'>GRID PRACTICE</h1>
        {/* <img className='home__image' src='https://source.unsplash.com/collection/2203755'/> */}
        <div className='home__front image-card'>
          <img src='https://source.unsplash.com/collection/2203755'/>
        </div>
        <div className='home__back image-card'>
          <img src='https://source.unsplash.com/collection/2203755'/>
        </div>
      </div>
    );
  }
}
