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
                <div className='card__back__projects'>
                    {
                        projects.map((project, index) => {
                            if(index <= 4) {
                                return <CardProject {...project}/>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BackCard;