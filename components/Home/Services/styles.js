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
  &.open{  
  display:block;
  position: absolute; /* Sit on top of the page content */ 
  bottom: 0%;
  /* left: 0%;   */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  background: #eaebec; 
  width: 100%;
  height:0%;
  animation: panel-anime 300ms ease-in-out normal forwards;    
  overflow-y: auto;  
}

@keyframes panel-anime{  
  0% {
    /* width: 20%; */
    height:20%;
  }
  100%{
    /* width: 50%; */
    height:100%;
  }  
}

.close{
  display:none;
}
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