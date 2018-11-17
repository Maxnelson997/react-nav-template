import React, { Component } from 'react';
import CardProject from './cardProject';

class BackCard extends Component {
    render() {
        const { title, info, projects } = this.props;
        return (
            <div className={`${this.props.className}`}>
                <div className='card__back__bg'></div>
                <h1 className='card__back__title'>{title}</h1>
                <p className='card__back__info'>{info}</p>
                <a className='card__back__more' onClick={() => { console.log('what')}}>see more</a>
                <div className='card__back__projects'>
                    {
                        projects.map((project, index) => {
                            if(index <= 4) {
                                return <CardProject key={index} {...project}/>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BackCard;