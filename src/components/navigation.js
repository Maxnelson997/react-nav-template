import React, { Component } from 'react';

import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <Link to='/'>home</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/about'>about</Link>
        <Link to='/find'>find</Link>
        <Link to='/unsplash'>unsplash</Link>
      </div>
    );
  }
}
