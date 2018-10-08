import React, { Component } from 'react';

class PageTitle extends Component {
    render() {
        return (
            <div className='page-title'>
                <h1 className='page-title__title'>{this.props.title}</h1>
                <h2 className='page-title__sub-title'>{this.props.subtitle}</h2>
                <a className='page-title__action' onClick={this.props.action.action}>{this.props.action.title} {this.props.action.icon}</a>
            </div>
        )
    }
}

export default PageTitle;