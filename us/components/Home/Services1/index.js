import React from 'react'
import datas from "./data.json"
import {ContentWrapper, SectionHeader}from 'styles/global'
import { IllWrapper2, BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan} from './style'
import {MLSolutionsSVG} from './MLSolutionsSVG'
import { ImageTitle, TextBlock} from '../Services2/style'
import { FiArrowRightCircle } from 'react-icons/fi'


const Services1 = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>ML Models Services</SectionHeader>
                <ContentWrapper>
                    <IllWrapper2>
                        <MLSolutionsSVG />
                        <ImageTitle>{datas[1].title}</ImageTitle>
                    </IllWrapper2>
                    <TextBlock>
                        <div className="ml-2">
                            <BulletSubtitle>{datas[1].subtitle}</BulletSubtitle>
                        {
                            React.Children.toArray(
                                datas[1].items.map(data=>(
                                    <ServiceBulletsOuter>
                                        <ServiceBulletsSpan>
                                            <FiArrowRightCircle className="h-8 w-8 text-secondary2"/>
                                        </ServiceBulletsSpan>{data.tit}
                                    </ServiceBulletsOuter>
                                ))
                            )
                        }
                        </div>
                    </TextBlock>
                </ContentWrapper>
        </div>

    )

}

export {Services1}
