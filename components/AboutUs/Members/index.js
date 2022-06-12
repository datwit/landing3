import React from 'react'
import datas from "./team.json"
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global'
import {CollaboratorsCard} from '../Collaborators/CollaboratorsCard'
import Carousel from 'react-elastic-carousel'
import {CarouselWrapper, ColWrapper} from '../Collaborators/style'


const Members = ({classes}) => {   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   

    return (
        <CarouselWrapper className={classes}>
            <SectionHeader>Meet our team</SectionHeader>
            <SectionSubheader>We are a group of data scientists and engineers passionate about designing quality smart applications.</SectionSubheader>            
            <ContentWrapper>
                <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                {
                    React.Children.toArray(
                        datas.map(data => (                            
                            <ColWrapper> 
                                <CollaboratorsCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} src={data.src} />                          
                            </ColWrapper>                                                                        
                        ))
                    )                        
                }                                   
                </Carousel>                  
            </ContentWrapper>                       
        </CarouselWrapper>   
    )
}

export {Members}
