import { IconContent, IconTitle, IconText, IconBlock} from '../../Partner/Find/style'
import {IconWrapper} from './style'

const BenefitBlock = ({title, description, children}) => {
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

export default BenefitBlock
