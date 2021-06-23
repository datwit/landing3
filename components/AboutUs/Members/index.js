import datas from "./team.json";
import {MemberCol} from './style'
import {ContentWrapper} from '../../../styles/global';
import uuid from 'react-uuid'
import MemberCard from './MemberCard'
import Carousel from 'react-elastic-carousel'


const Members = ({classes}) => {   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   

    return (
        <div className={classes}>
            <h2 className="mt-4">Meet our team</h2>
            <h4 className="mb-4">We are dreamers disguised as data scientists, engineers and designers...</h4>
            
                <ContentWrapper>
                    <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                    {                       
                        datas.map(data => (
                            <div className="image-adjust" key={uuid()}>
                                <MemberCol> 
                                    <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} src={data.src} />                          
                                </MemberCol> 
                            </div>                                               
                        ))
                    }                                   
                    </Carousel>                  
                </ContentWrapper>                       
        </div>
   
    )
}

export default Members
