import datas from "./collaborators.json";
import {ColWrapper} from './style';
import {ContentWrapper} from '../../../styles/global';
import uuid from 'react-uuid'
import CollaboratorsCard from './CollaboratorsCard'
import Carousel from 'react-elastic-carousel'

const Collaborators = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 }        
    ]   
    
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4  mt-0 lg:mt-14">
            <h2 className="mt-4">Collaborators</h2>
            <h4 className="mb-6">Our amazing collaborators help drive Datwit towards being a cutting-edge company</h4>            
                <ContentWrapper>
                    <Carousel itemsToShow={3} breakPoints={breakPoints} onTouchMove={e => e.stopPropagation()}>
                        {                       
                        datas.map(data => (
                            
                            <div key={uuid()}>
                                <ColWrapper>                            
                                    <CollaboratorsCard name={data.name} designation={data.designation} twitter={data.twitter} linkedin={data.linkedin} github={data.github}/>                             
                                </ColWrapper>
                            </div>
                                                
                        ))
                        } 
                    </Carousel>                   
                </ContentWrapper>       
        </div>
    )
}

export default Collaborators
