import styled from "styled-components"

export const MemberCol = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})``;
export const SocialCard = styled.div
`
    position: absolute; 
    bottom: 0%;
    width:100%;
    /* background: #e69c24; */ 
    background:white;
    background: linear-gradient(
        to right bottom,
        rgba(255,255,255,0.7),
        rgba(255,255,255,0.3)
        );
    backdrop-filter:blur(2rem)    
    width: 100%;
    cursor: pointer; 
    z-index: 1;     
    transition: height 300ms ease-in-out;  
    -webkit-transition: height 300ms ease-in-out;
`;
export const MemberCol2 = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})
`
    @media (min-width: 640px){
        width:60%;
    }
    @media (min-width: 1024px){
        width:100%;
    }
`;
export const MemberDesig = styled.h3.attrs({
    className: "text-gray-500"
})``;
export const MemberRol = styled.h4.attrs({
    className: "text-gray-500"
})``;
export const SocialWrapper2 = styled.span.attrs({
    className: "flex justify-center"
})
`
/* position:relative;
bottom: -30px; */
`; 
