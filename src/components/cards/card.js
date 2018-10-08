import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, subtitle, imageUrl, height, back } = this.props;
        return (
            <div style={{height:height}} className='card'>
                <div className='card__front'>
                    <div className='card__front__title'>{title}</div>
                    <div className='card__front__subtitle'>{subtitle}</div>
                    <img className='card__front__img' src={imageUrl}/>
                    <div className='card__front__img-overlay'></div>
                </div>
                <div className='card__back'>
                    <div className='card__back__bg'></div>
                    <h1 className='card__back__title'>{back.title}</h1>
                    <p className='card__back__info'>{back.info}</p>
                </div>
            </div>
        )
    }
}

export default Card;