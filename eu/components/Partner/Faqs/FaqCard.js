import Link from "next/link"
import {QuestionWrapper, QuestionText} from './style'


const FaqCard = ({href, children}) => {

    return (

        <div className="w-full sm:w-2/4 p-6 md:p-10">
            <Link href={href}>
                <QuestionWrapper>
                    {children}                    
                </QuestionWrapper>
            </Link>
       </div>
    )
}

export {FaqCard}
