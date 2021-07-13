import React from 'react';
import datas from "../Services1/data.json";
import {ContentWrapper, SectionHeader}from 'styles/global';
import { BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan } from '../Services1/styles';
import MLSolutionsSVG from './MLSolutionsSVG'
import {IllWrapper, ImageTitle, TextBlock} from './style'

const Services2 = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>Machine Learning solutions from A to Z</SectionHeader>
                <ContentWrapper>
                    <IllWrapper>
                        <MLSolutionsSVG/>
                        <ImageTitle>{datas[0].title}</ImageTitle>
                    </IllWrapper>
                    <TextBlock>
                        <div className="ml-2">
                            <BulletSubtitle>{datas[0].subtitle}</BulletSubtitle>
                        {
                            React.Children.toArray(
                                datas[0].items.map(data=>(
                                    <ServiceBulletsOuter>
                                        <ServiceBulletsSpan>
                                        <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
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

export default Services2
