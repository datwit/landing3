import React from 'react'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'
import {ButtonPrice} from './style'

const PricingButton = ({style}) => {
    return (        
        <Link href="/contact">
            <ButtonPrice className={
                (style === 'secondary2' && 'naranja')
                || (style === 'secondary1' && 'azul')
                || (style === 'primary' && 'dark') }
            > Contact us
                <FiSend className={`h-6 w-6 ml-2`}/>
            </ButtonPrice>
        </Link>        
    )
}

export {PricingButton}
