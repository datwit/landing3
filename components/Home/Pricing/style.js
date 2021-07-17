import styled from "styled-components"

export const OuterWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3 w-full"
})``;
export const Field = styled.h2.attrs({
    className: "text-sm tracking-widest title-font mb-1 font-medium pt-2"
})``;
export const Price = styled.h1.attrs({
    className: "text-5xl text-primary mb-1 leading-none mx-auto"
})``;
export const LilDescrip = styled.p.attrs({
    className: "text-xs text-gray-500 mt-1 border-b border-gray-200"
})``;
export const PBulletsWrapper = styled.p.attrs({
    className: "flex items-center text-gray-600 mb-2 mt-2 text-xs"
})
`
@media (min-width: 640px){
    font-size: 0.850rem;
    line-height: 1.15rem;
}
`;
export const PBullets = styled.span.attrs({
    className: "w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0"
})
``;
export const CarouselContainer = styled.div.attrs({
    className: ""
})
`
.carousel-status{
    display:none;
}
.control-dots{
    
    bottom:-17px;
    li{
        width: 25px;
        height: 5px; 
    }

    .dot{
        width: 25px;
        height: 5px;
        border-radius:0;            
        background: #00baff;
        box-shadow:none;

    }  
}
.control-arrow {
    visibility:hidden;
    
    &.control-next, &.control-prev{
        &::before{            
            visibility:hidden;               
        }   
    }     
}
`;
