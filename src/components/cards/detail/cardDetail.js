import React, { Component } from 'react';

class CardDetail extends Component {
    render() {
        return (
            <div className='card-detail'>
                <h1 className='card-detail__title'>{title}</h1>
                <h2 className='card-detail__subtitle'>{subtitle}</h2>
            </div>
        )
    }
}

export default CardDetail;