import {Fragment} from 'react'
/* import Navbar from '../Navbar'  */


const Section = ({children, classes}) => {

    return ( 
        <Fragment>        
            <section className= {classes}>
                {/* <Navbar /> */}
                {children}        
            </section>
        </Fragment>  
    )

}

export default Section