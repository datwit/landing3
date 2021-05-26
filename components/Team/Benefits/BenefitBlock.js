import React from 'react'
import {IconBlock, IconContent, IconTitle, IconText} from '../../Partner/Find/style'

const BenefitBlock = ({src, title, description}) => {
    return (
        <IconBlock>
            <img className="lg:h-48 md:h-36 w-full object-cover object-center px-8" src={src} alt="image"/>
            <IconContent>
                <IconTitle>{title}</IconTitle>
                <IconText>{description}</IconText>
            </IconContent>
        </IconBlock>   
    )
}

export default BenefitBlock
