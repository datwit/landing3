import React from 'react'
import data from "./data.json"
import {ContentWrapper, SectionHeader, SectionSubheader} from '../../styles/global'
import {SCardWrapper, SCardBorder, CardContent, CardTitle, CardSubtitle, ReadMore} from '../Home/StudyCases/style'

const AllCases = () => {
    return (
        <div className="container px-5 mx-auto">
            <SectionHeader>Check out our solutions</SectionHeader>
            <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
            <div className="hidden md:block">
                <ContentWrapper>
                    {
                        data.map((d, key) => (
                            <SCardWrapper key={key}>
                                <SCardBorder>
                                    <img className="lg:h-48 md:h-28 w-full object-cover object-center" src={d.src} alt={d.alt} />
                                    <CardContent>
                                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                                        <CardTitle>{d.title}</CardTitle>
                                        <CardSubtitle>{d.description}</CardSubtitle>                                        
                                            <ReadMore>Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </ReadMore>                                        
                                    </CardContent>
                                </SCardBorder>
                            </SCardWrapper>
                        ))
                    }
                </ContentWrapper>
            </div>
        </div>
    )
}

export default AllCases
