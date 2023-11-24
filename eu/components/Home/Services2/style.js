import styled from 'styled-components';

export const IllWrapper = styled.div.attrs({
    className: "w-full md:w-2/4 my-auto"
  })
  `
  svg.resizes{
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
#wheel3{
  animation: wheel-rotate3 7s linear infinite ;
  -webkit-animation: wheel-rotate3 7s linear infinite;
  transform-origin:center;
  transform-box: fill-box;
}
#b1{
  animation: blk 800ms ease-in-out infinite;
  -webkit-animation: blk 800ms ease-in-out infinite;
  
}
#b2{
  animation: blk 800ms ease-in-out infinite 300ms;
  -webkit-animation: blk 800ms ease-in-out infinite 200ms;
}
#b3{
  animation: blk 800ms ease-in-out infinite 400ms;
  -webkit-animation: blk 800ms ease-in-out infinite 300ms;
}
@keyframes blk {
  100%{
    fill: white;
  }
}
@keyframes wheel-rotate3 {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(360deg);
  }
}  
`;
export const ImageTitle = styled.h2.attrs({
    className: "text-base md:text-2xl my-2 md:my-6"
})``;
export const TextBlock = styled.div.attrs({
    className: "w-full md:w-2/4 md:p-4"
})``;
  