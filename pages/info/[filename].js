import React from 'react' 
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Info = () => {

    const router = useRouter()
    console.log(router)

    return(
        <>
            <Navbar />

            <div><a>ParamID: {router.query.filename}</a></div> 

            {/*
            +++ condicional de si existe el archivo mostrarlo, else return 404
            +++ importar aqui el archivo con lo de markdown en dependencia de query.file
            */}
            
            <div className= "w-full h-screen bg-primary mx-auto px-10">
                <Footer />
            </div>
        </>
    ) 
  }

  export default Info
