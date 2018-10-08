import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, subtitle, imageUrl, height } = this.props;
        return (
            <div style={{height:height}} className='card'>
                <div className='card__title'>{title}</div>
                <div className='card__subtitle'>{subtitle}</div>
                <img className='card__img' src={imageUrl}/>
                <div className='card__img-overlay'></div>
            </div>
        )
    }
}

export default Card;