import React from 'react'
import './Home.css'
import Header from "../Header/index" 
import Footer  from "../Footer/index"
import Body from "../body/index"

function Home() {

    return(

        <div className= "home">
            <div>
                <Header/>
            </div>
            
            <div>
                <Body/>
            </div>

            <div>
                <Footer/>
            </div>
            
            
        </div>
    )
}

export default Home;