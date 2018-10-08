import React, { Component } from 'react';
import Card from './card';

class Cards extends Component {
    render() {
        return (
            <div className={`${this.props.className} cards`}>
                {
                    this.props.cards ? 
                    this.props.cards.map((card, index) => {
                        return <Card key={index} {...card}/>
                    })
                    : ''
                }
            </div>
        )
    }
}

export default Cards;