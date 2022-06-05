import React from 'react';
import "./projects.css";
//import {ProjectData} from "../../../Data/projects";
import ProjectCard from './project-card';





function Projects() {
 // const data = ProjectData
  
  
  return (
    <div className='projects'> 
    
     <label className="section-title-project"><br/>Projects<br/></label>
      <div>
        
          <ProjectCard/>
     
      </div>
      

      

      </div>

    
  )
}

export default Projects; 