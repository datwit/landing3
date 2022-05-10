import React from 'react'
import datas from "./team.json"
import {MemberCol} from './style'
import {ContentWrapper, SectionHeader, SectionSubheader} from 'styles/global'
import {MemberCard} from './MemberCard'
import Carousel from 'react-elastic-carousel'
import {CarouselWrapper} from '../Collaborators/style'


const Members = ({classes}) => {   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   

    return (
        <CarouselWrapper className={classes}>
            <SectionHeader>Meet our team</SectionHeader>
            <SectionSubheader>We are a group of data scientists, engineers, and designers with a passion for our work and dreams like you....</SectionSubheader>            
            <ContentWrapper>
                <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                {
                    React.Children.toArray(
                        datas.map(data => (                            
                            <MemberCol> 
                                <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} src={data.src} />                          
                            </MemberCol>                                                                        
                        ))
                    )                        
                }                                   
                </Carousel>                  
            </ContentWrapper>                       
        </CarouselWrapper>   
    )
}

export {Members}
