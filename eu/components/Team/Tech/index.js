import React from 'react'
import {SectionHeader, SectionSubheader} from 'styles/global'
import datas from './data.json'
import {ImgContainer, ImgWrapper} from './style'


const Tech = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>We like to wear many hats...</SectionHeader>
            <SectionSubheader>This is where our expertise lies</SectionSubheader>
            <ImgContainer>
                {
                    React.Children.toArray(
                        datas.map( data => (
                        <ImgWrapper>
                            <img src={data.src} alt={data.alt}/>
                        </ImgWrapper>
                        ))
                    )                   
                }                
            </ImgContainer>
        </div>
    )
}

export {Tech}
