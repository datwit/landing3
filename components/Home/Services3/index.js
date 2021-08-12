import React from 'react'
import datas from "../Services1/data.json";
import {ContentWrapper, SectionHeader}from 'styles/global';
import { ImageTitle, TextBlock} from '../Services2/style'
import { FiArrowRightCircle } from 'react-icons/fi';
import {DataAnalySVG} from './DataAnalySVG'
import { BulletSubtitle, ServiceBulletsOuter, ServiceBulletsSpan } from '../Services1/style';
import { IllWrapper3 } from './style';

const Services3 = ({classes}) => {

    return (
        <div className={classes}>
            <SectionHeader>Wait...there's more...</SectionHeader>
                <ContentWrapper>
                    <IllWrapper3>
                        <DataAnalySVG />
                        <ImageTitle>{datas[2].title}</ImageTitle>
                    </IllWrapper3>
                    <TextBlock>
                        <div className="ml-2">
                            <BulletSubtitle>{datas[2].subtitle}</BulletSubtitle>
                        {
                            React.Children.toArray(
                                datas[2].items.map(data=>(
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

export {Services3}
