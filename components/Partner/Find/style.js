import styled from 'styled-components'

export const IconBlock = styled.div.attrs({
    className: "h-full overflow-hidden mx-4 md:mx-0"
})
`
svg.resizes{
  @media (max-width: 639px){
    object-fit:cover;
    width: 210px;
    height:189px;
  }  
}
`;
export const IconContent = styled.div.attrs({
    className: "md:p-2 text-center"
})``;
export const IconTitle = styled.h1.attrs({
    className: "title-font  text-sm sm:text-base md:text-lg font-bold text-primary md:mb-1"
})``;
export const IconText = styled.p.attrs({
    className: "text-sm sm:text-base leading-5 text-gray-500 mb-3 mt-0"
})``;