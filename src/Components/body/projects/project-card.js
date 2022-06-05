import React from 'react';
import "./project-card.css";
import project1 from "../../../assets/icons/ency.jpg";
import project2 from "../../../assets/icons/SA.jpg";




function ProjectCard() {
  return (
    <div className='project-card'>
      <div className='project-info'>
        

        <div className='project-photo-div'>
        <img src={project1} className='project-photo' alt='Project image1'/>

        </div>

        <label className='project-title'><br/>Encryption and Decryption of Multimedia files using
Advanced Encryption Standard Algorithm</label>

        <div className='project-about'>
          <p className='project-desc'>Implemented encryption and decryption of Audio and Video
files using AES algorithm of Cryptography in Python language
for secure data transmission.</p>

        </div>
        

        

        <div className='project-links'>
          
            <a className='project-link' href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
              <div className='link-button'>
              <i class="fa-solid fa-globe"></i>Demo

              </div>
            </a>
          
          
             <a className='project-link' href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
             <div className='link-button'>
             <i class="fa-brands fa-github"></i>Github

             </div>
           </a>

        


        </div>
        
        
        <div className='project-tags'>
        
          <label className='tag'>Python</label>
          <label className='tag'>Jupyter Notebook</label>
          <label className='tag'>AES</label>
        </div>

        

        
      </div>


      <div className='project-info'>
        

        <div className='project-photo-div'>
        <img src={project2} className='project-photo2' alt='Project image1'/>

        </div>

        <label className='project-title'><br/>Sentiment Analysis of Code-mixed English-Marathi Social
Media data</label>

        <div className='project-about'>
          <p className='project-desc'>Performed Sentiment Analysis of a dataset having nearly 5000
YouTube comments in English-Marathi code mixing using ML
classifiers such as MNB, GNB, SVM, SGD and comparative
accuracy analysis was also done.
</p>

        </div>
        <div className='project-links'>
          
            <a className='project-link' href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
              <div className='link-button'>
              <i class="fa-solid fa-globe"></i>Demo

              </div>
            </a>
          
          
             <a className='project-link' href="https://github.com/Sakshi88888" target="_blank" rel="noreferrer">
             <div className='link-button'>
             <i class="fa-brands fa-github"></i>Github

             </div>
           </a>

        


        </div>
        
        
        <div className='project-tags'>
        
          <label className='tag'>NLP</label>
          <label className='tag'>Python</label>
          <label className='tag'>NLTK</label>
          <label className='tag'>SciPy</label>
        </div>

        

        
      </div>


        

      
     
        
    </div>
  )
}

export default ProjectCard  