
import {SectionHeader, SectionSubheader} from '../../../styles/global'
import datas from './data.json'
import {ImgContainer, ImgWrapper} from './style'
import uuid from 'react-uuid'


const Tech = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>Lorem ipsum dolor sit amet consectetur. </SectionHeader>
            <SectionSubheader>Blanditiis enim nihil earum qui, a non fugit consectetur nobis natus quasi...</SectionSubheader>
            <ImgContainer>
                {
                    datas.map( data => (
                        <ImgWrapper key={uuid()}>
                            <img src={data.src} alt={data.alt}/>
                        </ImgWrapper>
                    ))
                }                
            </ImgContainer>
        </div>
    )
}

export default Tech
