import React from 'react'
import {SCardBorder, CardContent, CardTitle, CardSubtitle, ReadMore} from './style';
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi";

const StudyCasesCard = ({img, title,summary,id}) => {
    return (
        <SCardBorder>
            <img className="lg:h-48 h-36 w-full object-cover object-center res-img" src={img} alt="" />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{summary}</CardSubtitle>
                     <Link href={`/studycases/${id}`}>
                       <ReadMore>Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </ReadMore>
                    </Link>
            </CardContent>
        </SCardBorder>
    )
}

export default StudyCasesCard
