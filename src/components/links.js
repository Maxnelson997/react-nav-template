import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <div className={`links ${this.props.className}`}>
                <Link to='/'>HOME</Link>
                <Link to='/work'>WORK</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
        )
    }
}

export default Links;