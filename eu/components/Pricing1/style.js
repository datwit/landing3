import styled from "styled-components"

export const OuterWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3"
})
`
    #priceCardReveal{
        position: absolute; 
        bottom: 0%;
        width:100%;  
        cursor: pointer; 
        z-index: 1;     
        transition: height 300ms ease-in-out;  
        -webkit-transition: height 300ms ease-in-out;        
        background-color: white;
        overflow-y: auto;
    }      
`;
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
export const ToggleWrapper = styled.div.attrs({
    className: "flex mx-auto my-3 justify-center lg:max-w-lg xl:max-w-xl"
})``;
export const FullPricingCard = styled.div.attrs({
    className: "border-2 shadow-lg box-border mx-auto relative overflow-hidden cursor-pointer"
})
`
min-height: 280px;   
`;
export const BundleChooser = styled.div.attrs({
    className: "py-1 px-4 text-xs sm:text-base flex flex-col items-center cursor-pointer relative"
})
`
    z-index:2;
    svg{
        margin:10px;
    }
    path{
      stroke: #4b4b4d;
    }
    h4{
       color: #4b4b4d;
       margin: 5px 0 5px 0;
    }

    &::before{
        position:absolute;
        bottom:0;
        content:"";
        background: ${props => props.color};
        height: 0px;
        z-index: -1;
        width: 100%;

    }
    &.open::before{
        height:100%;
        transition: height 300ms ease-in-out;
        -webkit-transition: height 300ms ease-in-out;
    }
    &.open{
         path{
            stroke:white;
            transition: stroke 300ms ease-in-out;
            -webkit-transition: stroke 300ms ease-in-out;
        }
        h4{
            color: white;
            transition: color 300ms ease-in-out;
            -webkit-transition: color 300ms ease-in-out;
        }
    }


`;
export const BulletWrapper= styled.ul.attrs({
    className: "m-2"
})    
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
    className: "flex items-center text-gray-600 text-sm sm:text-base mt-2"
})``;
export const BulletTextSpan = styled.span.attrs({
    className: "w-6 h-6 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;
export const CardPriceCont = styled.div.attrs({
    className: " p-4 w-full"
})
`
&.slide-left{
    position: relative;
    left: -1000px;
    -webkit-animation: slidel 0.8s forwards;
    -webkit-animation-delay: 0.3s;
    animation: slidel 0.8s forwards;
    animation-delay: 0.3s;
    overflow:hidden;
}
@-webkit-keyframes slidel {
    100% { left: 0; }
}

@keyframes slidel {
    100% { left: 0; }
}
`;
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
    &:hover{
        color:#1e4158;
        border-width:3px;
        border-color:#1e4158;
        background: white;
        svg{
            color:#1e4158;
        }
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