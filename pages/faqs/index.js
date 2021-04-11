
import datas from '../../components/Partner/Faqs/data.json'
import uuid from 'react-uuid'
import {SectionHeader,SectionSubheader} from '../../styles/global'
import {QuestionText} from '../../components/Partner/Faqs/style'
import Navbar from '../../components/Navbar' 

const FaqsQandA = () => {       
     
    return (
        <>
        <Navbar />
        <div className="container px-5 mx-auto">
            <SectionHeader>Frequently asked questions</SectionHeader>
            <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit...</SectionSubheader>
            {
                datas.map(data => (
                    <div key={uuid()} id={data.id}>
                        <h4>{data.question}</h4>
                        <div>
                            <p className="text-base mt-3">{data.answer}</p>
                        </div>
                    </div>
                ))
            }        
        </div>
        </>
    )
}

export default FaqsQandA
