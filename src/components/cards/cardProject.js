import React, { Component } from 'react';

class CardProject extends Component {
    render() {
        const { title, imageUrl } = this.props;
        return (
            <div className={`card-project ${this.props.className}`}>
                <div className='card-project__title'>{title}</div>
                <img className='card-project__img' src={imageUrl}/>
            </div>
        )
    }
}

export default CardProject;