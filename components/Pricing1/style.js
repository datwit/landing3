import styled from "styled-components"

export const OuterWrapper = styled.div.attrs({
    className: "p-4 md:w-2/4 w-full"
})``;
export const Field = styled.h2.attrs({
    className: "text-sm tracking-widest text-white title-font font-semibold py-2 "
})``;
export const Price = styled.h1.attrs({
    className: "text-5xl text-primary leading-none"
})``;
export const LilDescrip = styled.p.attrs({
    className: "text-sm text-gray-500 text-center"
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
export const BulletWrapper= styled.ul
`
&.slide-right{
    position: relative;
    right: -1000px;
    -webkit-animation: slider 0.8s forwards;
    -webkit-animation-delay: 0.3s;
    animation: slider 0.8s forwards;
    animation-delay: 0.3s;

}
@-webkit-keyframes slider {
    100% { right: 0; }
}

@keyframes slider {
    100% { right: 0; }
}
`;
export const BulletText = styled.p.attrs({
    className: "flex items-center text-gray-600 m-3 text-sm sm:text-base"
})``;
export const BulletTextSpan = styled.span.attrs({
    className: "w-8 h-8 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;
export const ButtonPrice = styled.div.attrs({
    className: "mx-auto my-4 border-3"
})
`

    padding: .5rem 1rem;
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.3 ease, transform 0.3 ease;
    background-color: #EAEBEC;
    color: #4b4b4d;
    font-weight: 600;
    display: inline-flex;
    cursor:pointer;
    border-color: #EAEBEC;

    svg{
       color: #4b4b4d;
    }

    &:active{
        transform: translate(4px,4px);
    }

    &.naranja{
        &:hover{
            color:#e69c24; 
            border-width:3px;
            border-color:#e69c24;
            background: white;
            svg{
                color:#e69c24;
            }
        }
    }
    &.azul{
        &:hover{
            color:#00baff; 
            border-width:3px;
            border-color:#00baff;
            background: white;
            svg{
                color:#00baff;
            }
        }
    }
    &.dark{
        &:hover{
            color:#1e4158; 
            border-width:3px;
            border-color:#1e4158;
            background: white;
            svg{
                color:#1e4158;
            }
        }
    }    
`;