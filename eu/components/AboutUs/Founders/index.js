import React from 'react'
import datas from "./founders.json"
import {ColWrapper, CarouselWrapper} from '../Collaborators/style'
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global'
import {CollaboratorsCard} from '../Collaborators/CollaboratorsCard'
import Carousel from 'react-elastic-carousel'

const Founders = ({classes}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   
    
    return (
        <CarouselWrapper className={classes}>
            <SectionHeader>Founders</SectionHeader>
            <SectionSubheader>Our leaders are constant, they bring experience in development and management effort.</SectionSubheader>
            <ContentWrapper>                
                <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                    {
                        React.Children.toArray(
                            datas.map(data => (                             
                                <ColWrapper>                            
                                    <CollaboratorsCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} src={data.src}/>                             
                                </ColWrapper>                                                                            
                            ))
                             
                        )
                    }
                </Carousel>                                                 
            </ContentWrapper>       
        </CarouselWrapper>
    )
}

export {Founders}
