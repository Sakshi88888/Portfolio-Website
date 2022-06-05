import React from 'react';
import "./about.css";
import pic2 from "../../../assets/portfolio_illustration2.jpg";
import SocialContact from '../../common/social-contact';

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello, My name is <br/><br/>
          <span className='info-name'>SAKSHI PATIL</span>
          <br/><br/> I am an undergraduate Instrumentation and Control Engineering student inclined toward Software Development.
          Curious, enthusiastic, solution oriented individual having a good knowledge of Java, Python and front end technologies.  
          
        </div>
        <div className='about-photo'>
          <img src={pic2}  alt="Profile pic" className="profile-pic"/>
           
          
          

        </div>
      </div>

      <SocialContact/>


    </div>
  )
}

export default About