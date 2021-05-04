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
export const CardContent = styled.div.attrs({  
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
export const ServTabContent = styled.div.attrs({
  className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6"
})
`
#inner-content{
  height:50vh;
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
#leaf1{
  animation: leaf-anime1 4s linear infinite;
  -webkit-animation:leaf-anime1 4s linear infinite;
  transform-origin:bottom;
  transform-box: fill-box;
}
#leaf2{
  animation: leaf-anime2 4s linear infinite;
  -webkit-animation: leaf-anime2 4s linear infinite;
  transform-origin:bottom;
  transform-box: fill-box;
}
#cup{
  animation: cup-anime 4.1s linear infinite; 
  -webkit-animation: cup-anime 4.1s linear infinite;
}
#dot1{
  animation: dots 800ms ease-in-out infinite;
  -webkit-animation: dots 800ms ease-in-out infinite;
  
}
#dot2{
  animation: dots 800ms ease-in-out infinite 200ms;
  -webkit-animation: dots 800ms ease-in-out infinite 200ms;
}
#dot3{
  animation: dots 800ms ease-in-out infinite 300ms;
  -webkit-animation: dots 800ms ease-in-out infinite 300ms;
}
#dot4{
  animation: dots 800ms ease-in-out infinite 400ms;
  -webkit-animation: dots 800ms ease-in-out infinite 400ms;
}
@keyframes dots {
  100%{
    fill: white;
  }
}
@keyframes leaf-anime1 {
  0%{
    transform: rotateZ(0);
  }
  50%{
    transform: rotateZ(8deg);
  }
  75%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(-5deg);
  }
}
@keyframes leaf-anime2 {
  0%{
    transform: rotateZ(0);
  }
  50%{
    transform: rotateZ(10deg);
  }
  75%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(-10deg);
  }
}
@keyframes cup-anime {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(5px);
  }
  75%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-5px);
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
export const TabResponsive = styled.div.attrs({
  className: ""
})
`
  position: absolute; 
  bottom: 0;  
  background: #e69c24; 
  width: 100%;
  cursor: pointer;   
  transition: height 300ms ease-in-out;  
  -webkit-transition: height 300ms ease-in-out;
  display: flex;
  justify-content: center;
`;
export const TabTitle = styled.a.attrs({
  className: "flex flex-col items-center"
})
`
    position:absolute;
    top: 100%;
    transform: translateY(-100%);
    z-index: 1;

`;
export const TabTitle1 = styled.a.attrs({
  className: "flex flex-col items-center"
})
`    
    z-index: 0;    
`;