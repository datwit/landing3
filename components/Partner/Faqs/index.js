import { SectionHeader, SectionSubheader} from '../../../styles/global'
import {QuestionWrapper, QuestionText} from './style';
import datas from './data.json'
import uuid from 'react-uuid'
import Link from 'next/link'


const Faqs = () => {  
    
    
    return (
        <div className="container px-5 mx-auto">
            <SectionHeader>Frequently asked questions</SectionHeader> 
            <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
            <div>
                {
                    datas.map(data=>(
                        <QuestionWrapper key={uuid()}>
                            <Link href={`/faqs/#${data.id}`}><QuestionText>{data.question}</QuestionText></Link>
                        </QuestionWrapper>
                    ))
                }                                   
            </div>
                     
        </div>
            
    )
}

export default Faqs
