import {Fragment} from 'react'
/* import Navbar from '../Navbar'  */


const Section = ({children}) => {

    return ( 
        <Fragment>        
        <section className= "w-full h-screen pt-20">
            {/* <Navbar /> */}
            {children}        
        </section>
        </Fragment>  
    )

}

export default Section