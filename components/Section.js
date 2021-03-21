import React, {Fragment} from 'react'
import Navbar from '../components/Navbar' 


const Section = ({children}) => {

    return ( 
        <Fragment>        
        <section className= "w-full h-screen">
            <Navbar />
            {children}        
        </section>
        </Fragment>  
    )

}

export default Section