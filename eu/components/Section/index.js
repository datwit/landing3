
const Section = ({children, classes}) => {

    return ( 
        <>        
            <section className= {classes}>               
                {children}        
            </section>
        </>  
    )

}

export {Section}