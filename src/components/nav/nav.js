import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className={`${this.props.className} nav`}>
        <h1 className='nav__title'>maxcodes</h1>
        <img src='https://source.unsplash.com/collection/190/1600x900'/>
      </div>
    );
  }
}
