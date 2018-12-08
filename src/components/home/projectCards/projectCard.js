import React, { Component } from 'react'

class ProjectCard extends Component {
   render() {
       const { className, _id, title, subtitle, description } = this.props
       console.log(_id);
       return (
           <div className={`${className} project-card`}>
                <h1 className='project-card__title'>{title}</h1>
                <h4 className='project-card__subtitle'>{subtitle}</h4>
                <div className='project-card__line'></div>
                <div className='project-card__description'>
                    {description}
                </div>
                <div className='project-card__mask'>

                </div>
           </div>
       )
   }
}

export default ProjectCard;