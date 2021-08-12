import React from 'react';
import datas from "./data.json";
import {SCardWrapper} from './style';
import {ContentWrapper, SectionSubheader, SectionHeader} from 'styles/global';
import {StudyCasesCard} from './StudyCasesCard';
import Carousel from 'react-elastic-carousel'


const StudyCases = ({classes}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 }
    ]

    return (
    <div className={classes}>
        <SectionHeader>Check out our solutions</SectionHeader>
        <SectionSubheader>We enjoy our everyday challenges and we are good at it...</SectionSubheader>
        <div className="hidden md:block">
            <ContentWrapper>
               {
                   React.Children.toArray(
                    datas.map(data => (
                        <SCardWrapper >
                            <StudyCasesCard img={data.img} title={data.title} id={data.id} summary={data.summary}/>
                        </SCardWrapper>
                        ))
                   )
               }
            </ContentWrapper>
        </div>
        <div className="md:hidden">
            <Carousel breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                {
                    React.Children.toArray(
                        datas.map(data => (
                        <SCardWrapper>
                            <StudyCasesCard img={data.img} title={data.title} id={data.id} summary={data.summary}/>
                        </SCardWrapper>
                        ))
                    )

                }
            </Carousel>
        </div>
    </div>


    )
}

export {StudyCases}
