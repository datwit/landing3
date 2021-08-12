import { ColName, ColRol,SocialLinkItem} from './style';
import {useState} from 'react'
import {SocialCard, SocialWrapper2} from '../Members/style'
import { FiTwitter,FiGithub, FiLinkedin } from 'react-icons/fi';

const CollaboratorsCard = ({name, designation, twitter, linkedin, github, src}) => {
    const [hover, setHover] = useState(false)

    const toggleHoverON = () => {
        setHover(true)        
    }
    const toggleHoverOFF = () => {
        setHover(false)        
    }

    return (
        <>
        <img alt="team" className="flex-shrink-0 h-full w-full object-cover object-center" src={src}/>
        <SocialCard onMouseEnter={toggleHoverON} onMouseLeave={toggleHoverOFF} className={hover ? "h-full" : "h-7"}>
            <ColName>{name}</ColName>
            <ColRol>{designation}</ColRol>
            <SocialWrapper2>
                <SocialLinkItem href={twitter}>                   
                    <FiTwitter/>
                </SocialLinkItem>
                <SocialLinkItem href={linkedin}>
                   <FiLinkedin />                  
                </SocialLinkItem>
                <SocialLinkItem href={github}>
                    <FiGithub />                  
                </SocialLinkItem>
            </SocialWrapper2>
        </SocialCard>             
        </>
    )
}

export {CollaboratorsCard}
