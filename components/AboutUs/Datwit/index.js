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
                    <DParagraph> Datwit was founded in 2019 by a group of friends in Belgrade, Serbia. 
                        From the very beginning, our main goal has been to create AI/ML powered multipurpose smart solutions
                        by integrating modern techniques like Cloud Computing, Machine Learning, 
                        Data Analysis and micro-services. We integrate our artificial intelligence 
                        solutions into other software applications.
                        <br />
                        At Datwit, we want to help companies make their own small impact on the world
                        around them and expand their possibilities.
                        <br />
                        Find our open software offerings on Github!
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
