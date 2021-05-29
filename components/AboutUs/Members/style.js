import styled from "styled-components"

export const MemberCol = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})``;
export const SocialCard = styled.div
`
    position: absolute; 
    bottom: 0%;
    width:100%;  
    cursor: pointer; 
    z-index: 1;     
    transition: height 300ms ease-in-out;  
    -webkit-transition: height 300ms ease-in-out;

    //glassmorphism workaround
    /* slightly transparent fallback */ 
    background-color: rgba(255, 255, 255, .5);
    

    /* if backdrop support: very transparent and blurred */
    // background-color: rgba(255, 255, 255, .4);
    // @supports ((-webkit-backdrop-filter: blur(2rem)) or (backdrop-filter: blur(2rem))) {    
        
    //     background: linear-gradient(
    //         to right bottom,
    //         rgba(255,255,255,0.5),
    //         rgba(255,255,255,0.3)
    //         );
    //     -webkit-backdrop-filter: blur(2rem);
    //     backdrop-filter: blur(2rem);
    
    // }
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
``; 

