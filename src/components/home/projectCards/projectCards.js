import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectCard from './projectCard';

class ProjectCards extends Component {
   render() {
       const { className, projectCards } = this.props
       return (
           <div className={`${className} project-cards`}>
              {
                  projectCards ? 
                  projectCards.map(projCard => {
                      return <ProjectCard key={projCard._id} {...projCard}/>
                  })
                  : ''
              }
           </div>
       )
   }
}

function mapStateToProps(state) {
    const { projectCards } = state.projectCards;
    return { projectCards }
}

ProjectCards = connect(mapStateToProps)(ProjectCards);

export default ProjectCards;