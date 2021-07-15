import React from 'react';
import {SectionHeader, SectionSubheader} from 'styles/global'
import datas from './data.json'
import {ImgContainer, ImgWrapper} from './style'


const Tech = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>We like to wear a lot of hats...</SectionHeader>
            <SectionSubheader>Therefore this is where our expertise resides.</SectionSubheader>
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

export default Tech
