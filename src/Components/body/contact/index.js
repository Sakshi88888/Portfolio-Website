import React from 'react'
import './contact.css';
import resume from "../../../assets/Resume_Sakshi.pdf";



import linkedin from "../../../assets/icons/linkedin-circle.png" ;
import github from "../../../assets/icons/githuub.png";
import gmail from "../../../assets/icons/gmail.png";


function Contact() {
  return (
    <div className='contact'> 
     <label className='section-title-contact'>Contact</label>
     <div className='contact-container'>
       <div className='contact-left'>
         <p>Want to get in touch ? You can contact me on any of the platforms</p>

         <div className='social-contact'>
       <a href="https://www.linkedin.com/in/sakshi-patil-1b39071b6" target="_blank" rel="noreferrer">
            <div className='social-icon-div'>
                <img src={linkedin} className="social-icon" alt='socialicon'/>

            </div>

        </a>
        <a href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
             <div className='social-icon-div'>
                 <img src={github} className="social-icon" alt='socialicon'/>

            </div>
            

        </a>
        <a href='mailto: sakshi.patil19@vit.edu' target="_blank" rel="noreferrer">
            <div className='social-icon-div'>
                 <img src={gmail} className="social-icon" alt='socialicon'/>
              
            </div>
        </a>
    </div>

       </div>

       <div className='download'>
         <a href={resume} download='myresume'>
          <i class="fa fa-download" aria-hidden="true"></i>

          Download Resume

         </a>
     

       </div>

     </div>
    
    </div>
  )
}

export default Contact;