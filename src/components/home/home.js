import React, { Component } from 'react';

import Typewriter from '../typewriter';
import HomeCards from './homeCards';

class Home extends Component {

    render() {
        return (
            <div className='home layout__content-inset'>
                <div className='home__title'>
                    <div className='home__title__heading'>maxcodes</div>
                    <Typewriter className='home__title__type-writer'/>
                </div>
                <HomeCards className='home__content'/>
            </div>
        )
    }
}

export default Home;