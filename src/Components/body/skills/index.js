import React from 'react';
import { SkillsData } from '../../../Data/skills';
import SkillCard from './skill-card';
import "./skills.css";

function Skills() {

  const data = SkillsData;
  return (

    
    <div className='skills'>
      <labeL className='section-title'>Skills</labeL>
      <div className='skills-container'></div>

      {data.map((item)=>{
        return(

          <div className='skills-section'>
            <label className='skills-section-title'>{item.type}</label>
            <div className='skills-list'>
              {item.list.map((skill)=>{
                return(

                  <SkillCard skill={skill}/>
                )
              })}

              


            </div>




          </div>




        );



       
      })}


    </div>
  )
}

export default Skills;