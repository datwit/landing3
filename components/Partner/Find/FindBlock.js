import React from 'react'
import { IconContent, IconTitle, IconText} from './style'
import {IconWrapper} from '../../Team/Benefits/style'
import { IconBlock} from './style'

const FindBlock = ({ title , description, children}) => {
    return (
         <IconWrapper>
            <IconBlock>
                {children}
                <IconContent>
		            <IconTitle>{title}</IconTitle>
		            <IconText>{description}</IconText>
	        	</IconContent>
            </IconBlock>
        </IconWrapper>
    )
}

export default FindBlock
