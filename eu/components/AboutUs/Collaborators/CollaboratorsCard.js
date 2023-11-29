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
            {/* <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>. */}
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
