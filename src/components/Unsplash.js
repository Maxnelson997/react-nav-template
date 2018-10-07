import React, { Component } from 'react';

class Unsplash extends Component {
    render() {
        return (
            <div className='home layout__content-inset'>
                <img className='home__image' src='https://source.unsplash.com/collection/2203755'/>
                <a className='home__link' target='_blank' href='https://github.com/Maxnelson997/react-nav-template'>VIEW ON GITHUB</a>
            </div>
        )
    }
}

export default Unsplash;