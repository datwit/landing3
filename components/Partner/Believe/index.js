import React from 'react'
import { SectionHeader} from 'styles/global'
import datas from './bullets.json';
import { BulletsContainer } from './style';
import {PBullets} from '../../Pricing1/style';
import { IoIosPlayCircle } from "react-icons/io";


const Believe = ({classes}) => {
    return (
        <div className={classes}>
            <BulletsContainer>
                <SectionHeader className="text-left pb-3">Datwit team believes in:</SectionHeader>
                {
                    React.Children.toArray(
                        datas.map(data => (
                        <div  className="m-3 flex items-center">
                            <PBullets>                               
                                <IoIosPlayCircle className="h-8 w-8 text-secondary2"/>
                            </PBullets>
                            {data}
                        </div>                        
                        ))
                    )                    
                }
            </BulletsContainer>         
        </div>
    )
}

export {Believe}
