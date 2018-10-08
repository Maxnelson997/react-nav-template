import React, { Component } from 'react';

class FrontCard extends Component {
    render() {
        const { title, subtitle, imageUrl } = this.props;
        return (
            <div className={`${this.props.className}`}>
                <div className='card__front__title'>{title}</div>
                <div className='card__front__subtitle'>{subtitle}</div>
                <img className='card__front__img' src={imageUrl}/>
                <div className='card__front__img-overlay'></div>
            </div>
        )
    }
}

export default FrontCard;