import React, { Component } from 'react';
import Links from '../links';

export default class Footer extends Component {
    render() {
      return (
        <div className={`${this.props.className} footer`}>
          <h1 className='footer__title'>MAX NELSON</h1>
          <Links className='footer__links'/>
          <div className='footer__line'/>
          <div className='footer__trademark'>maxcodes™ All rights reserved.</div>

        </div>
      );
    }
  }
  