import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <div className={`links ${this.props.className}`}>
                <Link to='/'>HOME</Link>
                <Link to='/shop'>SHOP</Link>
                {/* <Link to='/about'>ABOUT</Link> */}
                <Link to='/blog'>BLOG</Link>
                <Link to='/talk'>TALK</Link>
            </div>
        )
    }
}

export default Links;