import {ColName, SocialLinkItem} from '../Collaborators/style'
import { MemberDesig, MemberRol, SocialCard, SocialWrapper2} from './style'
import {useState} from 'react'
import { FiTwitter,FiGithub, FiLinkedin } from 'react-icons/fi';

const MemberCard = ({name, designation, rol, twitter, linkedin, github, src}) => {

    const [hover, setHover] = useState(false)

    const toggleHoverON = () => {
        setHover(true)        
    }
    const toggleHoverOFF = () => {
        setHover(false)        
    }
   
    return (
        <>
            <img alt="team" className="flex-shrink-0 h-full w-full object-cover object-center" src={src} />             
            <SocialCard onMouseEnter={toggleHoverON} onMouseLeave={toggleHoverOFF} className={hover ? "h-full" : "h-7"}>
                <ColName>{name}</ColName>
                <MemberDesig>{designation}</MemberDesig>
                <MemberRol>{rol}</MemberRol>
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

export {MemberCard}
