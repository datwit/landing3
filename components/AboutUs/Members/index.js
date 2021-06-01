import datas from "./team.json";
import {MemberCol} from './style'
import {ContentWrapper} from '../../../styles/global';
import uuid from 'react-uuid'
import MemberCard from './MemberCard'
import Carousel from 'react-elastic-carousel'

// const Carousel = require('react-responsive-carousel').Carousel;

const Members = ({classes}) => {   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   

    return (
        <div className={classes}>
            <h2 className="mt-4">Meet our team</h2>
            <h4 className="mb-4">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</h4>
            
                <ContentWrapper>
                    <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                    {                       
                        datas.map(data => (
                            <div key={uuid()}>
                                <MemberCol> 
                                    <MemberCard name={data.name} designation={data.designation} rol={data.rol} twitter={data.twitter} linkedin={data.linkedin} github={data.github} />                          
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
