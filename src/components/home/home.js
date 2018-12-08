import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typewriter from '../typewriter';

import { fetchProjectCards } from '../../actions';
import ProjectCards from './projectCards/projectCards';

class Home extends Component {

    componentDidMount() {
        // fetch feature information for each child component here, since its the root of this page.
        this.props.fetchProjectCards();
    }

    render() {
        return (
            <div className='home layout__content-inset'>
                <div className='home__title'>
                    <div className='home__title__heading'>maxcodes</div>
                    <Typewriter className='home__title__type-writer'/>
                </div>
                {/* <HomeCards className='home__content'/> */}
                {/* <ProjectCards className='home__content'/> */}
            </div>
        )
    }
}

Home = connect(null, { fetchProjectCards })(Home);

export default Home;