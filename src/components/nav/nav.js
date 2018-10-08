import React, { Component } from 'react';
import Links from '../links';

export default class Nav extends Component {
    render() {
      return (
        <div className={`${this.props.className} nav`}>
          <h1 className='nav__title'>MAX NELSON</h1>
          <Links className='nav__links'/>
        </div>
      );
    }
  }
  