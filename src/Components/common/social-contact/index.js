import React from 'react';
import "./social-contact.css";


import linkedin from "../../../assets/icons/linkedin-circle.png" ;
import github from "../../../assets/icons/githuub.png";
import gmail from "../../../assets/icons/gmail.png";


function SocialContact() {
    
  return (
    <div className='social-contact'>
       <a href="https://www.linkedin.com/in/sakshi-patil-1b39071b6" target="_blank" rel="noreferrer">
            <div className='social-icon-div'>

             
                <img src={linkedin} className="social-icon" alt='socialmedia'/>

            </div>

        </a>
        <a href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
             <div className='social-icon-div'>
                 <img src={github} className="social-icon" alt='socialmedia'/>

            </div>
            

        </a>
        <a href='mailto: sakshi.patil19@vit.edu' target="_blank" rel="noreferrer">
            <div className='social-icon-div'>
                <img src={gmail} className='social-icon' alt='socialmedia'/>
            </div>
        </a>
    </div>
  )
}

export default SocialContact;