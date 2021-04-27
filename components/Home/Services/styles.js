import styled from 'styled-components'


export const IconWrapper = styled.div.attrs({
  className: "w-full inline-flex"
})``;
// export const IconListWrapper = styled.ul.attrs({
//   className: " mb-0 list-none pt-3 pb-4 flex-row sm:flex-col"
// })``;
// export const IconListItem = styled.li.attrs({
//   className: "sm:w-2/4 h-full -mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col"
// })``;
export const IconTitle = styled.a.attrs({
  className: "text-base font-bold  block leading-normal relative cursor-pointer"
})``;
export const TabContent = styled.div.attrs({
  // className: "z-10 w-full flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg"
})
`
  height: 50vh;

  @media (min-width: 1280px){
    height: 55vh;
  }
  @media (min-width: 1536px){
    height: 60vh;
  }

.open{  
  display:block;
  position: absolute; 
  bottom: 0%;
  right: 0%;  
  z-index: 2; 
  cursor: pointer; 
  /* background: #eaebec;  */
  width: 0%;
  height:0%;
  animation: panel-anime 300ms ease-in-out normal forwards;
  /* border-left: 3px solid #e69c24;    */
  
  @media (max-width: 768px){
    overflow:scroll;
  }
}

@keyframes panel-anime{  
  0% {
    width: 20%;
    height:25%;
  }  
  25% {
    width: 25%;
    height:50%;
  }
  75% {
    width: 50%;
    height:75%;
  }
  100%{
    width: 75%;
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
export const TabContentInner = styled.div.attrs({
  className: "px-4 flex-auto border-2 border-gray-200 border-opacity-60 md:h-full"
})
`
@media (max-width: 767px) {
  height: 400px;
  overflow:hidden !important;
  overflow: scroll !important;
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