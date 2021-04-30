import styled from 'styled-components'


export const CardRevealWrapper = styled.div.attrs({
  className: "p-4 md:w-2/4"
})``;

export const IconTitle = styled.a.attrs({
  className: "text-base font-bold  block leading-normal relative cursor-pointer py-4"
})
`
h2:hover{
  color: #00baff;
}
`;
export const TabContent = styled.div.attrs({  
}) 
`  
  position: absolute; 
  bottom: 0%;
  background: #eaebec; 
  width: 100%;
  cursor: pointer; 
  z-index: 1; 
  overflow-y: auto; 
  transition: height 300ms ease-in-out;  
  -webkit-transition: height 300ms ease-in-out;

#link2, #link1{
  background: #f6f7f8;
}
`;
export const CardRevealBorder = styled.div.attrs({
  className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})
`
svg.resizes{
  @media (max-width: 800px){
    object-fit:cover;
    width: 85%;
    height:85%;
  }
}
`;
export const BulletTitle = styled.h2.attrs({
  className: "text-lg mt-2 text-left"
})``;
export const BulletSubtitle = styled.p.attrs({
  className: "text-base mt-2"
})``;
export const ServiceBulletsOuter = styled.p.attrs({
  className: "text-base mt-2 flex"
})``;
export const ServiceBulletsSpan = styled.span.attrs({
  className: "w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;