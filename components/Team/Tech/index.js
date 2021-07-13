
import {SectionHeader, SectionSubheader} from '../../../styles/global'
import datas from './data.json'
import {ImgContainer, ImgWrapper} from './style'
import uuid from 'react-uuid'


const Tech = ({classes}) => {
    return (
        <div className={classes}>
            <SectionHeader>We like to wear a lot of hats...</SectionHeader>
            <SectionSubheader>Therefore this is where our expertise resides.</SectionSubheader>
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
