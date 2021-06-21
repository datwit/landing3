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
#wheel1{
  animation: wheel-rotate 5s linear infinite ;
  -webkit-animation: wheel-rotate 5s linear infinite;
  transform-origin:center;
  transform-box: fill-box;
}
#wheel2{
  animation: wheel-rotate 5s linear infinite ;
  -webkit-animation: wheel-rotate 5s linear infinite;
  animation-delay: .2s;
  -webkit-animation-delay: .2s;
  transform-origin:center;
  transform-box: fill-box;
}
#circle{
  animation: wheel-rotate 10s linear infinite ;
  -webkit-animation: wheel-rotate 10s linear infinite;
  transform-origin:center;
  transform-box: fill-box;
}
#arrow{
  animation: wheel-rotate-reverse 10s linear infinite ;
  -webkit-animation: wheel-rotate-reverse 10s linear infinite;
  transform-origin:center;
  transform-box: fill-box;
}
#fast{  
  animation: left-right 5s linear infinite ;
  -webkit-animation: left-right 5s linear infinite;
  transform-origin:left;
  transform-box: fill-box;
}
@keyframes wheel-rotate {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(360deg);
  }  
}
@keyframes wheel-rotate-reverse {
  0%{
    transform: rotateZ(360deg);
  }
  100%{
    transform: rotateZ(0);
  }  
}
@keyframes left-right {
  0%{    
    transform: translateX(-5px);
    
  }
  100%{   
    transform: translateX(5px);
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