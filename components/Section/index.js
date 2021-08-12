import {Fragment} from 'react'


const Section = ({children, classes}) => {

    return ( 
        <Fragment>        
            <section className= {classes}>               
                {children}        
            </section>
        </Fragment>  
    )

}

export {Section}