import React from 'react'
import "./mobile.css"

function Mobile ({isOpen,setIsOpen}) {

    return(
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
             <i class="fa fa-times-circle"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#about'>About me
                


                </a>

            </div>

            <div className='mobile-option'>
                <a href='#projects'>Projects
                   

                    
                </a>

            </div>

            <div className='mobile-option'>
                <a href='#skills'>Skills

                    
                </a>

            </div>

            <div className='mobile-option'>
                <a href='#contact'>Contact

                    
                </a>

            </div>

            </div>
           
        </div>
        
    );
}

export default Mobile;