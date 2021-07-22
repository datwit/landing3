import styled from 'styled-components'


export const IllWrapper3 = styled.div.attrs({
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
#leaf1{
  animation: leaf-anime1 2s linear infinite alternate;
  -webkit-animation:leaf-anime1 2s linear infinite alternate;
  transform-origin:bottom;
  transform-box: fill-box;
}
#leaf2{
  animation: leaf-anime2 2.2s linear infinite alternate;
  -webkit-animation: leaf-anime2 2.2s linear infinite alternate;
  transform-origin:bottom;
  transform-box: fill-box;
}
#Vector_56{
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 5s linear forwards infinite;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }  
}
@keyframes leaf-anime1 {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(12deg);
  }  
}
@keyframes leaf-anime2 {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(15deg);
  }  
}
`;