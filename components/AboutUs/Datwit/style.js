import styled from "styled-components"

export const DatwitWrapper = styled.div.attrs({
    className: "mx-auto flex flex-wrap"
})``;
export const ImgWrapper = styled.div.attrs({
    className: "lg:w-1/2 w-full"
})
`
    svg {
        width:  auto;
        height: auto;
    }
    svg.resizes{
  
    @media (min-width: 1024px){
        object-fit:cover;
        width: 90%;
        height:90%;
    }
}
    #sign, #hand2, #hand1{
        animation: sign-anime 1s linear infinite alternate; 
        -webkit-animation: sign-anime 1s linear infinite alternate;
    }
    @keyframes sign-anime {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(10px);
        }
    }
`;
export const TextBlock = styled.div.attrs({
    className: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
})``;
export const DHeader = styled.h1.attrs({
    className: "text-primary text-3xl title-font font-semibold mb-1 text-center"
})``;
export const DParagraph = styled.p.attrs({
    className: "leading-relaxed text-justify"
})``;
export const GitLink = styled.a.attrs({
    className: "inline-block"
})``;
