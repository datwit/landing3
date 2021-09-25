import React, {useState} from 'react'
import { Field, Price, LilDescrip, FullPricingCard, BulletWrapper} from './style'

const MainPricingCard = ({style, field, price, description, children}) => {
    const [hover, setHover] = useState(false)

    const toggleHoverON = () => {
        setHover(true)        
    }
    const toggleHoverOFF = () => {
        setHover(false)        
    }

    return (
        <>           
            <FullPricingCard className={`border-${style}`} onMouseEnter={toggleHoverON} onMouseLeave={toggleHoverOFF}>
                <div className={`bg-${style}`}><Field>{field}</Field></div>
                <div className="p-3">
                    <span className="flex justify-center items-baseline my-2"><Price>{price}</Price><p className="m-0"> /hr</p></span>
                    <h4 className="text-sm font-semibold pb-2">billed monthly</h4>
                    <LilDescrip>{description}</LilDescrip>                   
                </div>
                <div className={hover ? "h-full" : "h-0"} id="priceCardReveal" onWheel={e => e.stopPropagation()}>
                    <BulletWrapper>
                        <h4 className="font-semibold text-left">What's included:</h4>
                        {children}
                    </BulletWrapper>    
                </div>                 
            </FullPricingCard>                              
        </>
    )
}

export {MainPricingCard}
