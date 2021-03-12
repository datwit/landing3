import React, {Fragment} from 'react'






const Section = ({children}) => {

    return ( 
        <Fragment>        
        <section className= "w-full h-screen flex justify-center items-center">{children}</section>
        </Fragment>  
    )

}

export default Section