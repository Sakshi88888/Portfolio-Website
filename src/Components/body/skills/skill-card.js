import React from 'react';
import './skill-card.css'


function SkillCard({skill}) {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skill.icon}
            
        </div>
        <labeL className="skill-name">{skill.name}</labeL>


    </div>
  );
}

export default SkillCard;