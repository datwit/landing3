import React from 'react'
import VerticalCarousel from '../../Home/Services/VerticalCarousel'
import data from "./data.json";

const Services = () => {
    return (
        <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
    )
}

export default Services
