import { useState } from 'react'
import { ColName, ColRol, SocialLinkItem, SocialCard, SocialWrapper2 } from './style'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'


const CollaboratorsCard = ({name, designation, rol, twitter, linkedin, github, src}) => {
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
                {designation != "" && 
                    <ColRol>{designation}</ColRol>
                }
                {rol != "" && 
                    <ColRol>{rol}</ColRol>
                }
                <SocialWrapper2>
                    {twitter != "" && 
                        <SocialLinkItem href={twitter}>                   
                        <FiTwitter/>
                        </SocialLinkItem>
                    }
                    {linkedin != "" &&
                        <SocialLinkItem href={linkedin}>
                        <FiLinkedin />                  
                        </SocialLinkItem>
                    }
                    {github != "" &&
                        <SocialLinkItem href={github}>
                        <FiGithub />                  
                    </SocialLinkItem>
                    }
                </SocialWrapper2>
            </SocialCard>             
        </>
    )
}

export {CollaboratorsCard}
