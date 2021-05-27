import React from 'react'
import {PBullets} from './style';

const PricingBullets = ({title}) => {

    return (
        <>
            <PBullets>
                <svg className="h-5 w-5 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="4"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
            </PBullets>{title}
        </>
    )
}

export default PricingBullets
