import React, { Component } from 'react'

class BackgroundImage extends Component {
   render() {
       const { className, src } = this.props
       return (
           <div className={`${className} background-image`}>
              <img src={src}/>
           </div>
       )
   }
}

export default BackgroundImage;