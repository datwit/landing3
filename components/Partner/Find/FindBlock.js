import React from 'react'
import { IconContent, IconTitle, IconText} from './style'

const FindBlock = ({ title , description}) => {
    return (        
        <IconContent>
            <IconTitle>{title}</IconTitle>
            <IconText>{description}</IconText>
        </IconContent>
        
    )
}

export default FindBlock
