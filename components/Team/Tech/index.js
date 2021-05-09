
import {SectionHeader, SectionSubheader} from '../../../styles/global'
import datas from './data.json'
import {ImgContainer, ImgWrapper} from './style'


const Tech = () => {
    return (
        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
            <SectionHeader>Lorem ipsum dolor sit amet consectetur. </SectionHeader>
            <SectionSubheader>Blanditiis enim nihil earum qui, a non fugit consectetur nobis natus quasi...</SectionSubheader>
            <ImgContainer>
                {
                    datas.map((data,key)=>(
                        <ImgWrapper key={key}>
                            <img src={data.src} alt={data.alt}/>
                        </ImgWrapper>

                    ))
                }                
            </ImgContainer>
        </div>
    )
}

export default Tech
