import {DatwitWrapper, TextBlock, DHeader, DParagraph, GitLink, ImgWrapper} from './style'
import {FoundersIllustration} from './FoundersIllustration'
import { FiGithub } from "react-icons/fi"


const Datwit = ({classes}) => {
    return (
        <div className={classes}>
            <DatwitWrapper>
                <ImgWrapper>                   
                    <FoundersIllustration />
                </ImgWrapper>                
                <TextBlock>
                    <DHeader>Datwit</DHeader>
                    <DParagraph>We are a Serbian Company dedicated to creating multipurpose software solutions
                        integrating modern techniques
                        like Cloud Computing, Machine Learning, Data Analysis and microservices.
                        Datwit develops small web apps with full artificial intelligence capabilities.
                        <br />
                        <br />
                        Take a look to our open solutions
                        <GitLink href="https://github.com/datwit">                        
                            <FiGithub className="h-8 w-8 text-secondary2 ml-4 hover:text-secondary1" />
                        </GitLink>
                    </DParagraph>
                </TextBlock>
            </DatwitWrapper>
        </div>
    )
}

export {Datwit}
