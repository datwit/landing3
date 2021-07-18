import styled from 'styled-components'


export const IllWrapper2 = styled.div.attrs({
  className: "w-full md:w-2/4 my-auto"
})
`
svg.resizes1{
  @media (min-width: 768px){
    object-fit:cover;
    width: 70%;
    height:70%;
  } 
  @media (max-width: 767px){
    object-fit:cover;
    width: 60%;
    height:60%;
  } 
  @media (max-width: 400px){
    object-fit:cover;
    width: auto;
    height:auto;
  }    
}
#cup{
  animation: cup-anime 1.9s linear infinite alternate; 
  -webkit-animation: cup-anime 1.9s linear infinite alternate;
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
@keyframes cup-anime {
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(5px);
  }
}
`;
export const BulletSubtitle = styled.p.attrs({
  className: "text-base mt-2 text-gray-700"
})``;
export const ServiceBulletsOuter = styled.p.attrs({
  className: "text-base mt-2 flex text-gray-700"
})``;
export const ServiceBulletsSpan = styled.span.attrs({
  className: "w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;
