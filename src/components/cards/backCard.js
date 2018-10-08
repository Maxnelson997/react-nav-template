import React, { Component } from 'react';

class BackCard extends Component {
    render() {
        const { title, info } = this.props;
        return (
            <div className={`${this.props.className}`}>
                <div className='card__back__bg'></div>
                <h1 className='card__back__title'>{title}</h1>
                <p className='card__back__info'>{info}</p>
            </div>
        )
    }
}

export default BackCard;