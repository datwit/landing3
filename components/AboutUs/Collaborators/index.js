import React from 'react'
import datas from "./collaborators.json";
import {ColWrapper} from './style';
import {ContentWrapper} from 'styles/global';
import {CollaboratorsCard} from './CollaboratorsCard'
import Carousel from 'react-elastic-carousel'

const Collaborators = ({classes}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   
    
    return (
        <div className={classes}>
            <h2 className="mt-4">Collaborators</h2>
            <h4 className="mb-6">Our amazing collaborators help drive Datwit towards being a cutting-edge company</h4>            
            <ContentWrapper>
                <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                    {
                        React.Children.toArray(
                            datas.map(data => (                             
                                <ColWrapper>                            
                                    <CollaboratorsCard name={data.name} designation={data.designation} twitter={data.twitter} linkedin={data.linkedin} github={data.github} src={data.src}/>                             
                                </ColWrapper>                                                                            
                            ))
                        )                       
                    } 
                </Carousel>                   
            </ContentWrapper>       
        </div>
    )
}

export {Collaborators}
