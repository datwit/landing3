 import React from 'react'
import { IconContent, IconTitle, IconText} from '../../Partner/Find/style'

const BenefitBlock = ({title, description}) => {
    return (        
        <IconContent>
            <IconTitle>{title}</IconTitle>
            <IconText>{description}</IconText>
        </IconContent>         
    )
}

export default BenefitBlock
