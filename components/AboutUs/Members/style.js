import styled from "styled-components"

export const MemberCol = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})``;
export const SocialCard = styled.div
`
    position: absolute; 
    bottom: 0%;
    background: #e69c24; 
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
    className: "text-white"
})``;
export const MemberRol = styled.h4.attrs({
    className: "text-white"
})``;
