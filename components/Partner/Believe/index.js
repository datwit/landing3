import React from 'react'
import {ContentWrapper, SectionHeader, SectionSubheader} from '../../../styles/global'
import datas from './bullets.json';
import { BulletsContainer } from './style';
import {PBullets} from '../../Home/Pricing/style';
import uuid from 'react-uuid'

const Believe = ({classes}) => {
    return (
        <div className={classes}>
            <BulletsContainer>
            <SectionHeader className="text-left pb-3">Datwit team believes in:</SectionHeader>
            {
                datas.map(data => (
                    <div  className="m-3 flex items-center" key={uuid()}>
                        <PBullets>
                            <svg class="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="currentColor"  stroke="none"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polygon fill="#fff" points="10 8 16 12 10 16 10 8" /></svg>
                        </PBullets>
                        {data}
                    </div>
                    
                ))
            }
            </BulletsContainer>         
        </div>
    )
}

export default Believe
