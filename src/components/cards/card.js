import React, { Component } from 'react';
import BackCard from './backCard';
import FrontCard from './frontCard';

class Card extends Component {
    render() {
        const { front, height, back } = this.props;
        return (
            <div style={{height:height}} className='card'>
                <FrontCard className='card__front' {...front}/>
                <BackCard className='card__back' {...back}/>
            </div>
        )
    }
}

export default Card;