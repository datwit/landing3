import React from 'react'
import { Field, Price, LilDescrip, ButtonPrice} from './style'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'

const MainPricingCard = ({style, field,price,description}) => {

    return (
        <>           
            <div className={`border-${style} w-full md:w-2/3 md:h-full border-2 shadow-lg box-border mx-auto`}>
                <div className={`bg-${style}`}><Field>{field}</Field></div>
                <div className="p-3">
                    <span className="flex justify-center items-baseline my-2"><Price>{price}</Price><p className="m-0"> /hr</p></span>
                    <h4 className="text-sm font-semibold pb-2">billed monthly</h4>
                    <LilDescrip>{description}</LilDescrip>
                    <div className="flex justify-content my-4">
                        <Link href="/contact">
                            <ButtonPrice className={
                                (style === 'secondary2' && 'naranja')
                                || (style === 'secondary1' && 'azul')
                                || (style === 'primary' && 'dark')
                            }
                            > Contact us
                                <FiSend className={`h-6 w-6 ml-2`}/>
                            </ButtonPrice>
                        </Link>
                    </div>
                </div>
            </div>        
        </>
    )
}

export {MainPricingCard}
