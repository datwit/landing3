import styled from 'styled-components'

export const BlockOuterContainer = styled.div.attrs({
    className: "w-1/2 flex justify-center"
})
`
`;
export const BlockBorder = styled.a.attrs({
    className: ""
})
`    
    svg.resizes{
        @media (max-width: 360px){
        object-fit:cover;
        width: 80%;
        height:80%;
        } 
        @media (min-width: 361px){
        object-fit:cover;
        width: 85%;
        height:85%;
        }
        @media (min-width: 550px){
        object-fit:cover;
        width: 90%;
        height:90%;
        }     
    }
`;
export const SVGWrapper = styled.div.attrs({
    className: "relative"
})
`
.checkmark {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: block;
    stroke-width: 5;
    stroke: #fff;
    stroke-miterlimit: 10;    
    box-shadow: inset 0px 0px 0px #00baff;    
    opacity: 0;
}

.checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 5;
    stroke-miterlimit: 10;
    stroke: #00baff;
    fill: none;
}

.checkmark-check {
    transform-origin: 50% 50%;
    stroke-dasharray: 70;
    stroke-dashoffset: 70;
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}
@keyframes scale {
    0%,
    100% {
        transform: none;
    }
    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
}
@keyframes fill {
    100% {
        box-shadow: inset 0px 0px 0px 100px #00baff;
    }
}
.checkmark.fadeIn {
    opacity: 1;
    transition: all 0.8s ease;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark.fadeIn .checkmark-circle {
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark.fadeIn .checkmark-check {
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
`;
export const ButtonWrapper = styled.div.attrs({
    className: "flex justify-center pt-8"
})``;

export const SHeader = styled.h1.attrs({
    className: "text-primary text-xl sm:text-2xl md:text-3xl title-font font-semibold my-4 text-center"
})``;

