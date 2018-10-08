import React, { Component } from 'react';

import PageTitle from '../pageTitle';



class Home extends Component {

    render() {
        const homeTitleAction = {
            title: 'send me a message',
            action: () => console.log('trying to send a message to Max'),
            icon: <i className="fas fa-angle-right"></i>
        }
        return (
            <div className='home layout__content-inset'>
                <PageTitle title='maxcodes' subtitle='I build courses' action={homeTitleAction}/>
            </div>
        )
    }
}

export default Home;