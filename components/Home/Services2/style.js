import styled from 'styled-components';

export const IllWrapper = styled.div.attrs({
    className: "w-full md:w-1/3 my-auto"
  })
  `
  svg.resizes{
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
export const ImageTitle = styled.h2.attrs({
    className: "text-base md:text-2xl my-2 md:my-6"
})``;
export const TextBlock = styled.div.attrs({
    className: "w-full md:w-2/3 md:p-4"
})``;
  